import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class ShoplistProductService {

  constructor(private http: HttpClient) { }

  get(listId: number) {
    return this.http.get(URL.shoplistProducts + listId);
  }

  put(listId, product) {
    return this.http.put(URL.shoplistProducts + listId, product);
  }
}
