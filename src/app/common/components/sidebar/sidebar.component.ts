import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

export class List {
  icon: string;
  label: string;
  items: any;
  hide: boolean;
  link: string;
  isTabShow: boolean;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;

  @Input() sidemainmenus: any;


  list: List
  selectedList: List;
  onSelect(l: List): void {
    l.hide = !l.hide;
    this.selectedList = l;


    // for (var i = 0; i < this.sidemainmenus.length; i++) {
    //   if (this.sidemainmenus[i].label === l.label) {
    //     l.hide = !l.hide;
    //     this.selectedList = l;
    //   }
    //   else {
    //     this.sidemainmenus[i].hide = true;
    //   }
    // }


    //console.log(this.sidemainmenus)
  }
  constructor(private router: Router) {
  }

  ngOnInit(): void {


    this.router.events.subscribe((res) => {
      //alert('hi')
      this.activeLinkIndex = this.sidemainmenus.indexOf(this.sidemainmenus.find(tab => tab.link === '.' + this.router.url));
    });
  }

  ngAfterViewInit() {
    this.list = this.sidemainmenus;

  }

  activeTab(l: List) {
    if (!l.isTabShow)
      l.isTabShow = !l.isTabShow;

    sessionStorage.setItem('home_menu_data', JSON.stringify(this.sidemainmenus))
    if (!l.isTabShow)
      this.router.navigate(['home']);
  }

}
