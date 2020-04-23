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
import {RedirectAfterLoginService} from "../services/redirect-after-login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      private loginService: LoginService,
      private nav: NavController,
      private route: Router,
      private redirectUrl: RedirectAfterLoginService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isLogged().pipe(
        map((isLogged: boolean) => {
          if (!isLogged) {
              this.redirectUrl.redirectUrl = state.url;
              this.nav.navigateRoot('login')
              return false;
          }
          return true;
        })
    )
  }
  
}
