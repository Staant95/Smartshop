import { Component, OnInit } from '@angular/core';
import {TypeAheadService} from "../../../services/type-ahead.service";
import {Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {ShoplistProductService} from "../../../services/shoplist-product.service";

import {ToastController} from "@ionic/angular";
import {Product} from "../../../models/products.model";
import {ProductStoreService} from "../../../services/product-store.service";

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss'],
})
export class SearchProductsComponent implements OnInit {

  listId: number;
  private searchedProduct = new Subject<string>();
  products$: Observable<Product>;

  constructor(
      private searchService: TypeAheadService,
      private router: ActivatedRoute,
      private spService: ShoplistProductService,
      private toastController: ToastController,
      private productStore: ProductStoreService
  ) { }


  async presentToast(product: Product) {
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

  addToList(product: Product) {
      this.spService.save(this.listId, product.id).subscribe(
          p => this.productStore.pushProduct(p)
      );
      this.presentToast(product);
  }

}
