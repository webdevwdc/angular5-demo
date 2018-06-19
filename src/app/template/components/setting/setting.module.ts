import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './routes';
import { RouterModule, Routes } from "@angular/router";
import { PeriodconfigComponent } from './components/periodconfig/periodconfig.component';
import { TransactionconfigComponent } from './components/transactionconfig/transactionconfig.component';
import { TerritoryconfigComponent } from './components/territoryconfig/territoryconfig.component';
import { CommonsModule } from "../../../common/commons.module";
import {
  MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatInputModule, MatIconModule, MatRadioModule, MatSelectModule, MatAutocompleteModule,
  MatButtonToggleModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonsModule,
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
  declarations: [PeriodconfigComponent, TransactionconfigComponent, TerritoryconfigComponent],
  exports: [
    PeriodconfigComponent,
    TransactionconfigComponent,
    TerritoryconfigComponent
  ],
})
export class SettingModule { }
