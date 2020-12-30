import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AgridListAddDropdowmInHeaderComponent } from './content/practice/agrid-list-add-dropdowm-in-header/agrid-list-add-dropdowm-in-header.component';
import { DropdownComponent } from './content/practice/dropdown/dropdown.component';
import { ShowDialogComponent } from './show-dialog/show-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowDialogPopupComponent } from './content/practice/show-dialog-popup/show-dialog-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { PractiveScssComponent } from './content/practice/practive-scss/practive-scss.component';
import { ElevatorSystemComponent } from './content/experiment/elevator-system/elevator-system.component';
import { TemplateScssSelectTableComponent } from './content/practice/template-scss-select-table/template-scss-select-table.component';
import { ButtonSelectComponent } from './content/practice/template-scss-select-table/button-select/button-select.component';
import { TestMapFilterReduceComponent } from './content/practice/test-map-filter-reduce/test-map-filter-reduce.component';
import { TestApiComponent } from './content/practice/test-api/test-api.component';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { SimulateAccountUserListComponent } from './content/practice/simulate-account-user-list/simulate-account-user-list.component';
import { UserListComponent } from './content/practice/simulate-account-user-list/user-list/user-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { HeroTourComponent } from './content/experiment/hero-tour/hero-tour.component';
import { HeroDetailComponent } from './content/experiment/hero-tour/hero-detail/hero-detail.component';
import { HeroMessageComponent } from './content/experiment/hero-tour/hero-message/hero-message.component';
import { CreateFilterDialogComponent } from './content/Task-Experiment/create-filter-dialog/create-filter-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterDialogComponent } from './content/Task-Experiment/create-filter-dialog/filter-dialog/filter-dialog.component';

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
    TestMapFilterReduceComponent,
    TestApiComponent,
    TestApiComponent,
    SimulateAccountUserListComponent,
    UserListComponent,
    HeroTourComponent,
    HeroDetailComponent,
    HeroMessageComponent,
    CreateFilterDialogComponent,
    FilterDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatDialogModule,
    NgSelectModule,
    MatInputModule,
    MatMenuModule,
    MatTabsModule,
    NgbModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
