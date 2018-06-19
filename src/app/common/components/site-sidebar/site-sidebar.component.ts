import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

export class List {
  index: Number;
  label: string;
  link: string;
  isTabShow: boolean;
}

@Component({
  selector: 'app-site-sidebar',
  templateUrl: './site-sidebar.component.html',
  styleUrls: ['./site-sidebar.component.scss']
})
export class SiteSidebarComponent implements OnInit {

  routeLinks: List[];
  activeLinkIndex = -1;

  //
  @Input() sidemenus: any;

  //
  constructor(private router: Router) {

    //console.log(this.sidemenus)
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.sidemenus.indexOf(this.sidemenus.find(tab => tab.link === '.' + this.router.url));
    });
  }
  activeTab(l: any) {
    if (!l.isTabShow)
      l.isTabShow = !l.isTabShow;

    sessionStorage.setItem('setting_menu_data', JSON.stringify(this.sidemenus))

    if (!l.isTabShow)
      this.router.navigate(['setting']);
  }



}
