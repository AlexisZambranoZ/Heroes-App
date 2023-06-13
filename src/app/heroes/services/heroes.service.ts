import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/heroe.interface';
import { enviroments } from '../../../environments/enviroments';


@Injectable()
export class HeroesService {
    
    private baseUrl = enviroments.baseURL

    constructor(private http: HttpClient) {

     }

    getHeroes():Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
    }

    getHeroeById(id: string): Observable<Hero| undefined>{
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id} ` )
        .pipe(
            catchError(error => of(undefined)) 
        )
    }

    getSuggestions(query: string):Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)

    }

    addHero(hero: Hero): Observable<Hero>{
        return this.http.post <Hero> (`${this.baseUrl}/heroes`, hero)
    }

    updateHero(hero: Hero): Observable<Hero>{
        return this.http.patch <Hero> (`${this.baseUrl}/heroes/${hero.id} `, hero)
    }

    deleteHeroById(idHero: string): Observable<boolean>{
        return this.http.delete <Hero> (`${this.baseUrl}/heroes/${idHero} `).
        pipe(
            catchError(err => of ((false)) ),
            map(resp => true)
        )
    }

}