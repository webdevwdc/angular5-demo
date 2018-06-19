import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './routes';
import { RouterModule } from "@angular/router";
import { CommonsModule } from "../../../common/commons.module";
import { Transaction1Module } from "./components/transaction1/transaction1.module";
import { Transaction2Module } from "./components/transaction2/transaction2.module";
import {
  MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatInputModule, MatIconModule, MatRadioModule, MatSelectModule, MatAutocompleteModule,
  MatButtonToggleModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule
} from '@angular/material';
import { AgentComponent } from './components/agent/agent.component';
import { PayeeComponent } from './components/payee/payee.component';
import { Transaction1Component } from './components/transaction1/transaction1.component';
import { Transaction2Component } from './components/transaction2/transaction2.component';
import { ReferenceComponent } from './components/reference/reference.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonsModule,
    Transaction1Module,
    Transaction2Module,
     // Material Modules
     MatAutocompleteModule,
     MatButtonModule,
     MatButtonToggleModule,
     MatCardModule,
     MatCheckboxModule,
     MatChipsModule,
     MatTableModule,
     MatDatepickerModule,
     MatDialogModule,
     MatExpansionModule,
     MatFormFieldModule,
     MatGridListModule,
     MatIconModule,
     MatInputModule,
     MatListModule,
     MatMenuModule,
     MatPaginatorModule,
     MatProgressBarModule,
     MatProgressSpinnerModule,
     MatRadioModule,
     MatRippleModule,
     MatSelectModule,
     MatSidenavModule,
     MatSlideToggleModule,
     MatSliderModule,
     MatSnackBarModule,
     MatSortModule,
     MatTabsModule,
     MatToolbarModule,
     MatTooltipModule,
     MatNativeDateModule,
     MatStepperModule,
     //
  ],
  declarations: [AgentComponent, PayeeComponent, Transaction1Component, Transaction2Component, ReferenceComponent],
  exports: [
    AgentComponent, PayeeComponent, Transaction1Component, Transaction2Component, ReferenceComponent
  ],
})
export class HomeModule { }
