import { Component, OnInit } from '@angular/core';
import {TypeAheadService} from "../../../services/type-ahead.service";
import {Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {ShoplistProductService} from "../../../services/shoplist-product.service";
import {ProductNames} from "../../../models/ProductNames.model";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss'],
})
export class SearchProductsComponent implements OnInit {

  listId: number;
  private searchedProduct = new Subject<string>();
  products$: Observable<ProductNames[]>;

  constructor(
      private searchService: TypeAheadService,
      private router: ActivatedRoute,
      private spService: ShoplistProductService,
      private toastController: ToastController
  ) { }


  async presentToast(product: ProductNames) {
    const toast = await this.toastController.create({
      message: `${product.name} e' stato aggiunto alla tua lista!`,
      duration: 1000,
      position: "bottom",
      color: "primary"
    });
    await toast.present();
  }


  ngOnInit() {

    this.router.paramMap.subscribe(
        params => this.listId = parseInt(params.get("id"))
    );

    this.products$ = this.searchedProduct.pipe(
        // filter( text => text.length > 1),
        debounceTime(150),
        distinctUntilChanged(),
        switchMap( (term: string) => this.searchService.get(term))
    );
  }


  search(product: string): void {
    this.searchedProduct.next(product);
  }

  addToList(product: ProductNames) {

      this.spService.post({
        "id" : product.id,
        "name" : product.name,
        "format" : product.format,
        "avatar" : "https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png",
        "quantity" : 1,
        "brand" : product.brand
      });
      this.presentToast(product);
  }

}
