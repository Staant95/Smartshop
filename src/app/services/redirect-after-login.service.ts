import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RedirectAfterLoginService {

  redirectUrl$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  redirectUrl: string = null;
  constructor() { }

  getRedirectUrl(): Observable<string> {
    return this.redirectUrl$.asObservable();
  }



  setRedirectUrl(url: string){
    this.redirectUrl$.next(url);
  }
}
