import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {Storage} from "@ionic/storage";
import {fromPromise} from "rxjs/internal-compatibility";
import {mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  private token;
  constructor(private storage: Storage) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = this.getToken();
    console.log('after function call')
    const header = req.headers.append('Authorization', 'Bearer ' + this.token);
    let newRequest = req.clone({headers : header})

    return next.handle(newRequest);
  }

  async getToken() {
    console.log('in function')
    return await this.storage.get('auth_token');
  }

}
