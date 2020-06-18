import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { URL } from '../endpoints';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(formData): Observable<any> {
    return this.http.post(URL.register, formData);
  }
}
