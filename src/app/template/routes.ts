import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SettingComponent } from './components/setting/setting.component';

export var routes: Routes = [
  { path: 'home', 
    component: HomeComponent,
    loadChildren: './components/home/home.module#HomeModule'
},
  { 
    path: 'setting', 
    component: SettingComponent,
    loadChildren: './components/setting/setting.module#SettingModule'
  },
];
