import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { URL } from '../endpoints';
@Injectable({
  providedIn: 'root'
})
export class AddUserToShoplistService {

  constructor(private http: HttpClient) { }


  addUser(code: string) {
    return this.http.post(URL.addUser, {"code" : code});
  }
}
