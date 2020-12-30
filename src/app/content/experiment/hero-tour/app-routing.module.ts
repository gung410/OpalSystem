import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { HeroTourComponent } from './hero-tour.component';



const routes: Routes =[
  {
    path: 'heroes',
    component : HeroTourComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
