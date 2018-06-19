import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './routes';
import { RouterModule } from "@angular/router";
import { CommonsModule } from "../../../../../common/commons.module";
import { Subtrans1Component } from './components/subtrans1/subtrans1.component';
import { Subtrans2Component } from './components/subtrans2/subtrans2.component';
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
  declarations: [Subtrans1Component, Subtrans2Component],
  exports: [Subtrans1Component, Subtrans2Component]
})
export class Transaction1Module { }
