import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { URL } from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(formData) {
    return this.http.post(URL.registration, formData);
  }
}
