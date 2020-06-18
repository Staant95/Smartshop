import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoplistProductService} from "./shoplist-product.service";
import { URL } from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class TypeAheadService {

  constructor(
      private http: HttpClient) { }

  get(product: string): Observable<any> {
    return this.http.post(URL.search, {"name" : product});
  }

}
