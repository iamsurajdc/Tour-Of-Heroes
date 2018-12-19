import { HEROES } from './../mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})

export class HeroService {
  constructor(
    private http: HttpClient,
    private msgService: MessageService) { }
    private heroesUrl = 'api/heroes';  // URL to web api

  /** GET heroes from the server */
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
}

  getHero(id: number): Observable<Hero> {
    this.msgService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
