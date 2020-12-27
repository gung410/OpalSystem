import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Shared/hero.model';
import { HeroService } from 'src/app/Shared/hero.service';
import { MessageService } from 'src/app/Shared/message.service';
import { HEROS } from './Mocking-hero';

@Component({
  selector: 'app-hero-tour',
  templateUrl: './hero-tour.component.html',
  styleUrls: ['./hero-tour.component.scss']
})

export class HeroTourComponent implements OnInit {
  public displayHero : Hero ;
  public hero : Hero[] ;
  public allHero : Hero[] ;

  constructor(
    private heroService : HeroService,
    private messageService :MessageService
  ) { }
  
  ngOnInit(): void {
    this.selectAllWithObser()
  }
  selectHero(itemHero:Hero):void
  {
      this.displayHero =  itemHero;
  }
  selectHeroWIthObservableId(){
    this.heroService.getHeroWithObservable().subscribe(
      (hero) =>{
        this.hero = hero.filter(
               x=> x.id === 3
             )
      }
    );
  }
  selectAll()
  {
    this.allHero = HEROS
  }
  selectAllWithObser()
  {
    this.allHero= this.heroService.getHero()
    this.messageService.add('HeroService: fetched heroes');

  }
}
