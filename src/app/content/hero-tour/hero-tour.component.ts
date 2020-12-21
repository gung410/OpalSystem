import { Component, OnInit } from '@angular/core';
import { HEROS } from './Mocking-hero';

@Component({
  selector: 'app-hero-tour',
  templateUrl: './hero-tour.component.html',
  styleUrls: ['./hero-tour.component.scss']
})

export class HeroTourComponent implements OnInit {
  hero = HEROS ;

  constructor() { }
  
  ngOnInit(): void {
  }

}
