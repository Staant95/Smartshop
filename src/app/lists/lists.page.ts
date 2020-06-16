import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "../services/shopping-list.service";
import { PopoverController} from "@ionic/angular";
import {CreateCardPopoverComponent} from "./components/create-card-popover/create-card-popover.component";


@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  lists;

  constructor(
      private shoplists: ShoppingListService,
      private popoverCtrl: PopoverController
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


  async createCard(event) {

    const popover = await this.popoverCtrl.create({
      component: CreateCardPopoverComponent,
      event: event
    });

    popover.onDidDismiss().then(data => {
      if(data !== null){
        if(data !== 'undefined'){
          this.shoplists.create(data.data['listName']).subscribe(
              list => this.lists.push(list)
          );
        }
      }
    });

    return await popover.present();
  }


}
