import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgridListAddDropdowmInHeaderComponent } from './content/agrid-list-add-dropdowm-in-header/agrid-list-add-dropdowm-in-header.component';
import { DropdownComponent } from './content/dropdown/dropdown.component';
import { ElevatorSystemComponent } from './content/elevator-system/elevator-system.component';
import { PractiveScssComponent } from './content/practive-scss/practive-scss.component';
import { SimulateAccountUserListComponent } from './content/simulate-account-user-list/simulate-account-user-list.component';
import { TemplateScssSelectTableComponent } from './content/template-scss-select-table/template-scss-select-table.component';
import { TestApiComponent } from './content/test-api/test-api.component';
import { TestMapFilterReduceComponent } from './content/test-map-filter-reduce/test-map-filter-reduce.component';
import { ShowDialogComponent } from './show-dialog/show-dialog.component';


const routes: Routes = [
  {
      path:'agListDropDown',
      component:AgridListAddDropdowmInHeaderComponent
  },
  {
      path:'Dropdown',
      component:DropdownComponent
  },
  {
      path:'ShowDialog',
      component:ShowDialogComponent
  },
  {
      path:'PracticeCss',
      component:PractiveScssComponent
  },
  {
      path:'elevator',
      component:ElevatorSystemComponent
  },
  {
      path:'template-table-control',
      component:TemplateScssSelectTableComponent
  },
  {
      path:'MapFilter',
      component:TestMapFilterReduceComponent
  },
  {
      path:'TestApi',
      component:TestApiComponent
  },
  {
      path:'SimulateAccountUserList',
      component:SimulateAccountUserListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
