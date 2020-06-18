import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import { URL } from '../endpoints';
import {catchError, map} from 'rxjs/operators';
import {StorageService} from "./storage.service";
import {User} from "../models/User";

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

    login(credentials: Credentials): Observable<User> {

        return this.http.post<User>(URL.login, credentials).pipe(
            map((response) => {
                if(response['token'].trim() !== '' && response['token'] !== null) {

                    this.storageService.save(
                        {
                          'name' : response['name'],
                          'email' : response['email'],
                          'token' : response['token'],
                          'avatar' : response['avatar']
                        }).subscribe(_ => this.isLogged$.next(true));

                    return response;

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
