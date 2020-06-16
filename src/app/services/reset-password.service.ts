import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http: HttpClient) { }

  resetPassword(credentials) {
    return this.http.post('http://localhost:8000/api/reset', {"email" : "asda"});
  }
}
