import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../endpoints';
import {BehaviorSubject, of} from "rxjs";
import {Product} from "../models/products.model";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShoplistProductService {

  private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([
    {
      "id" : 0,
      "name" : "mela",
      "avatar" : "http://www.andromedafree.it/multimedia/clipart/upgrade1/varie/15/mela.png",
      "brand" : "Melinda",
      "quantity" : 2,
      "format" : 500,
    },
    {
      "id" : 1,
      "name" : "kiwi",
      "avatar" : "https://orig00.deviantart.net/7574/f/2012/171/b/5/kiwi_icon_2_by_yamshing-d545azt.png",
      "brand" : "Zespri",
      "quantity" : 1,
      "format" : 500
    },
  ]);

  private showSupermarketContainer: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  constructor(private http: HttpClient) { }

  get(listId: number) {
    // return this.http.get(URL.shoplistProducts + listId);
    return this.products$.asObservable();
  }

  put(listId, quantity, id) {
    // return this.http.put(URL.shoplistProducts + listId, product);
    this.products$.getValue().forEach(product => {
      if(product.id == id) product.quantity = quantity
    });
    this.showSupermarketContainer.next(true);
  }


  // post(listId, productId) {
  //   // return this.http.post(URL.shoplistProducts + listId, productId);
  // }

  post(product: Product) {
    this.products$.getValue().push(product);
    this.showSupermarketContainer.next(true);
  }


  delete(productId) {

    // return this.http.delete( URL.shoplistProducts + listId);
    this.products$.getValue().forEach((product, index) => {
      if(product.id == productId) this.products$.getValue().splice(index, 1)
    })
    this.showSupermarketContainer.next(true);
  }

  getSupermarketState() {
    return this.showSupermarketContainer;
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



}
