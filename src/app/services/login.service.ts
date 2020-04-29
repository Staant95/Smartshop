import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { URL } from '../endpoints';
import {map, switchMap} from 'rxjs/operators';
import {StorageService} from "./storage.service";
import {User} from "../models/user";

export interface Credentials {
  email: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string = '';
  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
      private http: HttpClient,
      private storageService: StorageService
      ) { }

    login(credentials: Credentials): Observable<any> {
      //dev'essere POST, ma con json-server usare il post inserirebbe un nuovo utente con le credenziali che passo
      //come parametro alla funzione login

        return this.http.get(URL.login).pipe(
            map((response) => {

                if(response['token'].trim() !== '' && response['token'] !== null) {
                    //this.storageService.save({...response}).subscribe( _ => this.isLogged$.next(true));
                    this.storageService.save(
                        {'name' : response['name'],
                            'email' : response['email'],
                            'token' : response['token']
                        }).subscribe(_ => this.isLogged$.next(true));


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
