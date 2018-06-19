import { Routes } from '@angular/router';

import { PeriodconfigComponent } from './components/periodconfig/periodconfig.component';
import { TransactionconfigComponent } from './components/transactionconfig/transactionconfig.component';
import { TerritoryconfigComponent } from './components/territoryconfig/territoryconfig.component';

export var routes: Routes = [
  { path: 'config1', component: PeriodconfigComponent},
  { path: 'config2', component: TransactionconfigComponent },
  { path: 'config3', component: TerritoryconfigComponent },
];