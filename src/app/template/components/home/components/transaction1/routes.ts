import { Routes } from '@angular/router';

import { Subtrans1Component } from './components/subtrans1/subtrans1.component';
import { Subtrans2Component } from './components/subtrans2/subtrans2.component';

export var routes: Routes = [
  { path: 'subtrans1', component: Subtrans1Component},
  { path: 'subtrans2', component: Subtrans2Component}
];