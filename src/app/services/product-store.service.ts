import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);


  constructor() { }

  getProductsObservable() {
    return this.products.asObservable();
  }

  pushProduct(p: Product[]){
    this.products.next(p);
  }


}
