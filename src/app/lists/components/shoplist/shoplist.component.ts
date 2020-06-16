import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShoplistProductService} from "../../../services/shoplist-product.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../../models/products.model";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss'],
})
export class ShoplistComponent implements OnInit {

  products$: Observable<Product[]>;
  compareSupermarketsBtn$: BehaviorSubject<boolean>;
  listId: number;
  listName: string;
  bestSupermarket$: Observable<any>;

  constructor(
      private route: ActivatedRoute,
      private spService: ShoplistProductService
  ) { }

  ngOnInit() {
    this.products$ = this.spService.get(this.listId);
    this.route.paramMap.subscribe(params => {
      this.listId = parseInt(params.get('id'));
    });
    this.route.queryParams.subscribe(q => this.listName = q.name)
    this.compareSupermarketsBtn$ = this.spService.getSupermarketState();
  }

  increaseQuantity(product: Product) {
    if (product.quantity < 9) {
      this.spService.put(this.listId, product.quantity + 1, product.id);
    }
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 0) {
      this.spService.put(this.listId, product.quantity - 1 , product.id);
    }
  }


  deleteProduct(productId: number) {
    this.spService.delete(productId)
  }


  compareSupermarket(distanza: number) {
    console.log(distanza)
    this.compareSupermarketsBtn$.next(false);
    this.bestSupermarket$ = this.spService.findBestSupermarket(1)
  }


}
