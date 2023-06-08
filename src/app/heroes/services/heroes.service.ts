import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

}