import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "../services/shopping-list.service";
import {ModalController} from "@ionic/angular";
import {CreateShoplistModalPage} from "./modals/create-shoplist-modal/create-shoplist-modal.page";


@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  lists;



  constructor(
      private shoplists: ShoppingListService,
      private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.shoplists.getAll().subscribe(
        data => this.lists = data
    );
    console.log(this.lists);
  }

  

  onCardDelete(cardID, index) {
    this.shoplists.delete(cardID).subscribe(
        _ => this.lists.splice(index,1)
    );
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CreateShoplistModalPage
    });


    modal.onWillDismiss().then((data) => {
      this.shoplists.create(data.data['listName']).subscribe(
          list => this.lists.push(list)
      );
    });
    return await modal.present();
  }
}
