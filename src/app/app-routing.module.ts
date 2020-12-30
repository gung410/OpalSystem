import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgridListAddDropdowmInHeaderComponent } from './content/practice/agrid-list-add-dropdowm-in-header/agrid-list-add-dropdowm-in-header.component';
import { DropdownComponent } from './content/practice/dropdown/dropdown.component';
import { ElevatorSystemComponent } from './content/experiment/elevator-system/elevator-system.component';
import { HeroTourComponent } from './content/experiment/hero-tour/hero-tour.component';
import { PractiveScssComponent } from './content/practice/practive-scss/practive-scss.component';
import { SimulateAccountUserListComponent } from './content/practice/simulate-account-user-list/simulate-account-user-list.component';
import { CreateFilterDialogComponent } from './content/Task-Experiment/create-filter-dialog/create-filter-dialog.component';
import { TemplateScssSelectTableComponent } from './content/practice/template-scss-select-table/template-scss-select-table.component';
import { TestApiComponent } from './content/practice/test-api/test-api.component';
import { TestMapFilterReduceComponent } from './content/practice/test-map-filter-reduce/test-map-filter-reduce.component';
import { ShowDialogComponent } from './show-dialog/show-dialog.component';
import { FilterDialogComponent } from './content/Task-Experiment/create-filter-dialog/filter-dialog/filter-dialog.component';


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
  {
      path:'HeroTour',
      component:HeroTourComponent
  },
  {
      path:'CreateFilterDialog',
      component:CreateFilterDialogComponent
  },
  {
      path:'FilterDialogComponent',
      component:FilterDialogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
