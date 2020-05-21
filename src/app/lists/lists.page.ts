import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "../services/shopping-list.service";


@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  lists;

  constructor(
      private shoplists: ShoppingListService,
  ) { }

  ngOnInit() {
    this.shoplists.getAll().subscribe(
        data => this.lists = data
    );
  }

  

  onCardDelete(cardID, index) {
    this.shoplists.delete(cardID).subscribe(
        _ => this.lists.splice(index,1)
    );
  }

}
