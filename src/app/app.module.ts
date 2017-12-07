import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatSidenavModule,
  MatCardModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule,
  MatSelectModule,

  MatProgressBarModule } from '@angular/material';
  import {DataTableModule,SharedModule,PickListModule , DataGridModule, PanelModule} from 'primeng/primeng';
  
import { AppComponent } from './app.component';
import { DemoDataService } from './demo-data.service';
import { HttpModule } from '@angular/http';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
  
    MatProgressBarModule,
    DataTableModule,SharedModule,PickListModule,
    DataGridModule,PanelModule,MultiSelectModule
  ],
  providers: [DemoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
