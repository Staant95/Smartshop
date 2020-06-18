import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URL} from '../endpoints';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Product} from "../models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ShoplistProductService {

  supermarketBtnState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) { }

  getAll(shoplistID: number): Observable<Product[]> {
    return this.http.get<Product[]>(URL.shoplists + "" +shoplistID + "/products");
  }

  save(shoplistId: number, productId: number): Observable<Product[]> {
    this.supermarketBtnState$.next(true);
    return this.http.post<Product[]>(URL.shoplists + "" + shoplistId + "/products", {"product_id" : productId});
  }

  delete(shoplistId: number, productId: number) {
    this.supermarketBtnState$.next(true);
    return this.http.delete(URL.shoplists + "" + shoplistId + "/products/" + productId);
  }

  updateQuantity(shoplistId: number, productId: number, quantity: number) {
    this.supermarketBtnState$.next(true);
    return this.http.put(URL.shoplists + "" + shoplistId + "/products/" + productId, {"quantity" : quantity});

  }

  findBestSupermarket(listID: number) {
    return of({
      "name" : "Conad",
      "total" : 9.50,
      "avatar" : "",
      "location" : "Via Roma, 35",
      "city" : "Milano"
    });
  }


  getSupermarketBtnState() {
    return this.supermarketBtnState$;
  }
}
