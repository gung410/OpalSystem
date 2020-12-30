import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { hero } from '../content/experiment/hero-tour/Hero-interface';
import { HEROS } from '../content/experiment/hero-tour/Mocking-hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    public messageService :MessageService
  ) { }
  getHero() {
    return HEROS ;
  }
  getHeroWithObservable() : Observable<hero[]>
  {
    return of(HEROS);
  }
}
