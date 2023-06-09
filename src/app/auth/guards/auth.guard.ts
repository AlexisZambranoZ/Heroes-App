import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanMatch, CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router) { }

    private checkAtuhStatus(): boolean | Observable<boolean> {
        return this.authService.checkAuthentication()
            .pipe(
                tap(isAuthenticate => {
                    console.log('Atuhenticated', isAuthenticate);
                }),
                tap(isAuthenticate => {
                    if (!isAuthenticate) {
                        this.router.navigate(['./auth/login'])
                    }
                })
            )
    }

    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        /*   console.log(  'can match');
          console.log(  {route , segments });
          return true */
        return this.checkAtuhStatus()
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        /*     console.log('Can activate');
            console.log({route , state});
          
            return true */
        return this.checkAtuhStatus()
    }



}