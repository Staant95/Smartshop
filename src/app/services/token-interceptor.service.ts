import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {Storage} from "@ionic/storage";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  private token;
  constructor(private storage: Storage) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return from(this.storage.get('token').then(
        token => {
          const header = req.headers.append('Authorization', 'Bearer ' + token);
          return req.clone({headers: header});
        })
    ).pipe(
        switchMap(newRequest => next.handle(newRequest))
    );

  }



}
