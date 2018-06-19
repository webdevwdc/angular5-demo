import { Routes } from '@angular/router';

import { AgentComponent } from './components/agent/agent.component';
import { PayeeComponent } from './components/payee/payee.component';
import { Transaction1Component } from './components/transaction1/transaction1.component';
import { Transaction2Component } from './components/transaction2/transaction2.component';
import { ReferenceComponent } from './components/reference/reference.component';

export var routes: Routes = [
  { path: 'agent', component: AgentComponent},
  { path: 'payee', component: PayeeComponent },
  { path: 'transaction1',
   component: Transaction1Component,
   loadChildren: './components/transaction1/transaction1.module#Transaction1Module'
  },
  { path: 'transaction2',
   component: Transaction2Component ,
   loadChildren: './components/transaction2/transaction2.module#Transaction2Module'
  },
  { path: 'reference', component: ReferenceComponent},
];