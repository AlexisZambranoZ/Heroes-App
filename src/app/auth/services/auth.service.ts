import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from 'src/environments/enviroments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthService {

    private baseUrl = enviroments.baseURL
    private user?: User

    constructor(private httpClient: HttpClient) { }

    get currentUser(): User | undefined {
        if (!this.user) return undefined
        return structuredClone(this.user)

    }

    login(mail: string, password: string): Observable<User> {
        return this.httpClient.get<User>(` ${this.baseUrl}/users/1 `)
            .pipe(
                tap(user => this.user = user),
                tap(user => localStorage.setItem('token', 'asaSDSAasaSAWsadas2165'))
            )
    }

    checkAuthentication(): Observable<boolean> {
        if(!localStorage.getItem('token')) return of (false)
     
        const token = localStorage.getItem('token')
        
        
        return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
        .pipe(
            tap(user => this.user = user),
            map(user => !!user),
            catchError(err => of(false))
        )
    
    }

    logout(){
        this.user = undefined
        localStorage.clear()
    }
}


