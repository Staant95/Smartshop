import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";
import {NavController} from "@ionic/angular";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      private loginService: LoginService,
      private nav: NavController,
      private route: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.loginService.isLogged().pipe(
        map((isLogged: boolean) => {
          if (!isLogged) {
              let path = state.url.replace(/\\/g, '-')
              this.route.navigate(['/login'], { queryParams: {"redirect" : path}});
              return false;
          }
          return true;
        })
    )
  }
  
}
