import { HEROES } from './../mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})

export class HeroService {
  constructor(private msgService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.msgService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.msgService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
