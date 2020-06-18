import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { URL } from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http: HttpClient) { }

  resetPassword(credentials) {
    return this.http.post(URL.resetPassword, credentials);
  }
}
