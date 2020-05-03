import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  lists = null;

  constructor(private shoplists: ShoppingListService) { }

  ngOnInit() {
    this.lists = this.shoplists.getAll();
  }

  onCardDelete() {
    console.log("called")
  }

}
