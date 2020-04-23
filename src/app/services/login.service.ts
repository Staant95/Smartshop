import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { URL } from '../endpoints';
import { map } from 'rxjs/operators';

export interface Credentials {
  email: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string = '';
  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
      private storage: Storage,
      private http: HttpClient,
      ) { }

  login(credentials: Credentials): Observable<any> {
      //dev'essere POST, ma con json-server usare il post inserirebbe un nuovo utente con le credenziali che passo
      //come parametro alla funzione login
      return this.http.get(URL.login).pipe(
        map((response) => {
            if(response['token'] && response['token'] !== null) {
              this.token = response['token'];

              this.storage.set('auth_token', this.token);
              this.storage.set('user', response['name']);
              this.storage.set('email', response['email']);

              this.isLogged$.next(true);

            } else {
              throw new HttpErrorResponse({status: 401});
            }
        })
    );
  }

  isLogged(): Observable<boolean> {
    return this.isLogged$.asObservable();
  }

}
