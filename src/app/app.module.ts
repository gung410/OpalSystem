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
    ElevatorSystemComponent
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
