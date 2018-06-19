import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../common/api.service';

export class List {
    icon: string;
    label: string;
    items: any;
    hide: boolean;
    link: string;
    isTabShow: boolean;
}



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    routeLinks: any[];
    activeLinkIndex = -1;

    list: List[];

    constructor(private router: Router, private apiService: ApiService) {
        this.apiService.getJSON('./assets/home_menus.json').subscribe(response => {

            if (sessionStorage.getItem('home_menu_data') != null)
                this.list = JSON.parse(sessionStorage.getItem('home_menu_data'))
            else
                this.list = response;

        });

    }

    closeTab(item) {

        item.isTabShow = false;
        sessionStorage.setItem('home_menu_data', JSON.stringify(this.list))
        this.router.navigate(['home']);
    }

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.list.indexOf(this.list.find(tab => tab.link === '.' + this.router.url));
        });
    }

}
