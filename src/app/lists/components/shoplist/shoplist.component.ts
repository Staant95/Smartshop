import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShoplistProductService} from "../../../services/shoplist-product.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../../models/products.model";
import {ProductStoreService} from "../../../services/product-store.service";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss'],
})
export class ShoplistComponent implements OnInit {

  supermarketBtnState$: BehaviorSubject<boolean>;
  productLength$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  listId: number;
  listName: string;
  bestSupermarket$: Observable<any>;
  products: Product[];

  constructor(
      private route: ActivatedRoute,
      private spService: ShoplistProductService,
      private productStore: ProductStoreService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listId = parseInt(params.get('id'));
    });
    this.route.queryParams.subscribe(q => this.listName = q.name);
    this.supermarketBtnState$ = this.spService.getSupermarketBtnState();

    this.spService.getAll(this.listId).subscribe(
        p => {
          this.products = p
        }
    );

    this.productStore.getProductsObservable().subscribe(
        data => {
            if(data !== null ) {
                if(!data.length) this.productLength$.next(true);
                console.log(data)
            }

          if(data) this.products = data
        }
    );

  }

  increaseQuantity(product: Product) {
    product.pivot['quantity'] += 1;
    this.spService.updateQuantity(this.listId, product.id, product.pivot['quantity'])
        .subscribe();

  }

  decreaseQuantity(product: Product) {
    product.pivot['quantity'] -= 1;
    this.spService.updateQuantity(this.listId, product.id, product.pivot['quantity'])
        .subscribe();
  }


  deleteProduct(product: Product, index: number) {

    this.spService.delete(this.listId, product.id).subscribe(
        _ => {
          this.products.splice(index,1);
          if(!this.products.length) {
            this.productLength$.next(false);
          }
        }
    );
  }

  compareSupermarket(distanza: number) {
    console.log(distanza)
    this.supermarketBtnState$.next(false);
    this.bestSupermarket$ = this.spService.findBestSupermarket(1)

  }

  doRefresh(event) {

      this.spService.getAll(this.listId).subscribe(
          p => {
            if(!p.length) this.productLength$.next(true);
            this.products = p;
            event.target.complete();
          }
      );
  }

}
