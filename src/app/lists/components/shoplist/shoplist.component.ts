import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { map } from 'rxjs/operators';
import {ShoplistProductService} from "../../../services/shoplist-product.service";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss'],
})
export class ShoplistComponent implements OnInit, AfterViewInit {

  products;
  productQuantity: number;
  listId: number;
  @ViewChild('quantity', {static: false}) quantity;

  constructor(
      private route: ActivatedRoute,
      private spService: ShoplistProductService
  ) { }

  ngOnInit() {
    this.route.data.pipe(
      map(data => data.products)
    ).subscribe(data => this.products = data)
    this.route.paramMap.subscribe(params => this.listId = parseInt(params.get('id')))
  }

  increaseQuantity(product) {

    this.productQuantity += 1;
    this.products['products'].forEach((p, index) => {
      if(p['id'] === product['id']) {
        this.products['products'][index]['quantity'] = this.productQuantity
      }
    });

    this.spService.put(this.listId, this.products).subscribe();

  }

  decreaseQuantity(product) {

    this.productQuantity -= 1;
    this.products['products'].forEach((p, index) => {
      if(p['id'] === product['id']) {
        this.products['products'][index]['quantity'] = this.productQuantity
      }
    });

    this.spService.put(this.listId, this.products).subscribe();


  }

  // changeQuantity(product) {
  //   // this.quantity.nativeElement.innerText = parseInt(this.quantity.nativeElement.innerText) + 1;
  //   this.productQuantity += 1;
  //   this.products['products'].forEach((p, index) => {
  //     if(p['id'] === product['id']) {
  //       this.products['products'][index]['quantity'] = this.productQuantity
  //     }
  //   });
  //
  //   console.log(this.products)
  //
  // }

  ngAfterViewInit(): void {
    this.productQuantity = parseInt(this.quantity.nativeElement.innerHTML);
  }








}
