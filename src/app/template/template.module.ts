import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonsModule } from "../common/commons.module";
import { routes } from './routes';
import { HomeComponent } from './components/home/home.component';
import { SettingComponent } from './components/setting/setting.component';
import { SettingModule } from "./components/setting/setting.module";
import { HomeModule } from "./components/home/home.module";
import {
  MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatInputModule, MatIconModule, MatRadioModule, MatSelectModule, MatAutocompleteModule,
  MatButtonToggleModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule
} from '@angular/material';
// import { SiteSidebarComponent } from './components/site-sidebar/site-sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    SettingModule,
    HomeModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
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
  declarations: [
    HomeComponent,
    SettingComponent,
    // SiteSidebarComponent
  ],
  exports: [
    // HomeComponent,
  ],
})
export class TemplateModule {}
