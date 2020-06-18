import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {forkJoin, Observable} from "rxjs";
import {User} from "../../models/User";
import {Storage} from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any>{
  user: User;
  constructor(private store: Storage) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return forkJoin({
      name: this.store.get('name'),
      avatar: this.store.get('avatar'),
      email: this.store.get('email')
    });

  }
}
