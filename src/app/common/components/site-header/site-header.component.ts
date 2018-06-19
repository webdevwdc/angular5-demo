import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  link: string;
  constructor() { }

  ngOnInit() {

    if (sessionStorage.getItem('last_active_route') == null)
      this.link = "/home";
    else
      this.link = sessionStorage.getItem('last_active_route');

  }

  setRoute() {
    sessionStorage.setItem('last_active_route', location.hash.replace('#', ''))
  }

}
