import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../common/api.service';

export class List {
  index: Number;
  label: string;
  link: string;
  isTabShow: boolean;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  //
  @Input() showCallBackPopUp: boolean;

  routeLinks: List[];
  activeLinkIndex = -1;

  constructor(private router: Router, private apiService: ApiService) {

    this.apiService.getJSON('./assets/settings_menus.json').subscribe(response => {

      if (sessionStorage.getItem('setting_menu_data') != null)
        this.routeLinks = JSON.parse(sessionStorage.getItem('setting_menu_data'))
      else
        this.routeLinks = response;

    });

  }

  //
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  closeTab(item) {


    item.isTabShow = false;
    sessionStorage.setItem('setting_menu_data', JSON.stringify(this.routeLinks))
    this.router.navigate(['setting']);


  }


}
