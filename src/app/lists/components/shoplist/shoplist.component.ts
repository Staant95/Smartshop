import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "../../../services/shopping-list.service";

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss'],
})
export class ShoplistComponent implements OnInit {

  products;

  constructor(private shoplistService: ShoppingListService) { }

  ngOnInit() {
    this.shoplistService.getAll().subscribe(

        data => {
          this.products = data['products'];
          console.log(data)
        }
    );
  }

}
