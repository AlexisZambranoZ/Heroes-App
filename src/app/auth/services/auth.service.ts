import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from 'src/environments/enviroments';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthService {

    private baseUrl = enviroments.baseURL
    private user?: User

    constructor(private httpClient: HttpClient) { }

    get currentUser(): User | undefined {
        if (!this.user) return undefined
        return structuredClone ( this.user)

    }

    /* login(mail: string, password: string ):Observable<User>{
        this.httpClient.get<User>( `${this.baseUrl}/users/1` )
        .pipe(
            tap(user=> {

            })
        )
    } */


}