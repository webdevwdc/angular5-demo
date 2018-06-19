import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  link: string;
  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem('last_active_route') == null)
      this.link = "/setting";
    else
      this.link = sessionStorage.getItem('last_active_route');
  }

  setRoute() {
  
    sessionStorage.setItem('last_active_route', location.hash.replace('#', ''))

  }

}
