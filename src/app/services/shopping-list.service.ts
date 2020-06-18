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

  save(listName: string) {
    return this.http.post(URL.shoplists, {"name" : listName});
  }
}
