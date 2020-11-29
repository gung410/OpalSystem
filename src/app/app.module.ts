import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AgridListAddDropdowmInHeaderComponent } from './content/agrid-list-add-dropdowm-in-header/agrid-list-add-dropdowm-in-header.component';
import { DropdownComponent } from './content/dropdown/dropdown.component';
import { ShowDialogComponent } from './show-dialog/show-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowDialogPopupComponent } from './content/show-dialog-popup/show-dialog-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { PractiveScssComponent } from './content/practive-scss/practive-scss.component';
import { ElevatorSystemComponent } from './content/elevator-system/elevator-system.component';
import { TemplateScssSelectTableComponent } from './content/template-scss-select-table/template-scss-select-table.component';
import { ButtonSelectComponent } from './content/template-scss-select-table/button-select/button-select.component';
import { TestMapFilterReduceComponent } from './content/test-map-filter-reduce/test-map-filter-reduce.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AgridListAddDropdowmInHeaderComponent,
    DropdownComponent,
    ShowDialogComponent,
    ShowDialogPopupComponent,
    PractiveScssComponent,
    ElevatorSystemComponent,
    TemplateScssSelectTableComponent,
    ButtonSelectComponent,
    TestMapFilterReduceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatDialogModule,
    NgSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
