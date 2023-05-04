import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

//local
import { Hero } from '../interfaces/hero.interface';
import { envvironments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = envvironments.baseURL;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable< Hero| undefined > {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe (
        catchError( error => of(undefined))           //funcion of sirve para darle formato de observable a un undefined
        );
    }

  getSuggestions(query: string): Observable<Hero[]> {

    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }

  //CRUD
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero)
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero is required')
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
  }

  deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        map(resp => true),
        catchError( err => of(false))
      );
  }

}
