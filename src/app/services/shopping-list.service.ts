import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { URL } from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get(URL.shoplists);
  }


  delete(id: number) {
    return this.http.delete(URL.shoplists + id);
  }

  create(listName: string) {
    return this.http.post(URL.shoplists, {
      "name" : listName,
      "avatar": "https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png",
      "total": "",
      "users": []
    });
  }
}
