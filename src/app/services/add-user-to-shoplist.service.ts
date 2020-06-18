import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddUserToShoplistService {

  constructor(private http: HttpClient) { }


  addUser(code: string) {
    return this.http.post(`http://localhost`, code);
  }
}
