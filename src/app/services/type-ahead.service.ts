import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {Product} from "../models/products.model";
import {ShoplistProductService} from "./shoplist-product.service";
import {map} from "rxjs/operators";
import {ProductNames} from "../models/ProductNames.model";

@Injectable({
  providedIn: 'root'
})
export class TypeAheadService {

    fakeProductNames: BehaviorSubject<ProductNames[]> = new BehaviorSubject<ProductNames[]>([
        {"id" : 10, "name" : "Nascondini", "avatar" : "", "format" : 300, "brand" : "Mulino Bianco"},
        {"id" : 11, "name" : "Latte", "avatar" : "", "format" : 500 , "brand" : "Centrale di Rieti"},
        {"id" : 12, "name" : "Prosciutto", "avatar" : "", "format" : 200, "brand" : "Capriccio"},
        {"id" : 13, "name" : "Mortadella", "avatar" : "", "format" : 100, "brand" : "Quella buona"},
        {"id" : 14, "name" : "Insalata", "avatar" : "", "format" : 500, "brand" : "Molto Fresca"},
        {"id" : 15, "name" : "Pomodori", "avatar" : "", "format" : 1000, "brand" : "Davvero gustosi"},
        {"id" : 16, "name" : "Cetrioli", "avatar" : "", "format" : 700, "brand" : "Quelli lunghi"},
        {"id" : 17, "name" : "Banane", "avatar" : "", "format" : 100, "brand" : "Chiquita"}
    ])

  constructor(
      private http: HttpClient,
      private spService: ShoplistProductService) { }

  // get(product: string): Observable<any> {
  //   return this.http.post("http://localhost:8000/api/search", {"name" : product});
  // }
  get(product: string): Observable<any> {
    return product.length > 0
        ?
        this.fakeProductNames.pipe(
        map(arrOfProducts => arrOfProducts.filter(
            p => {
              const pName = new RegExp(product, 'i');
              return p.name.match(pName)
            }
        )))
        : of<Product[]>([]);
  }

}
