import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from '../services/shopping-list.service';
import { PopoverController} from '@ionic/angular';
import {CreateCardPopoverComponent} from './components/create-card-popover/create-card-popover.component';
import {BehaviorSubject} from 'rxjs';
import {AddUserToShoplistService} from "../services/add-user-to-shoplist.service";


@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  lists;
  private listLength$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
      private shoplists: ShoppingListService,
      private popoverCtrl: PopoverController,
      private addUserToList: AddUserToShoplistService
  ) { }

  ngOnInit() {
    this.shoplists.getAll().subscribe(
        data => {
          this.lists = data;
          if (this.lists.length !== 0) {
            this.listLength$.next(true);
          }
        }
    );
  }



  onCardDelete(cardID, index) {
    this.shoplists.delete(cardID).subscribe(
        _ => {
          this.lists.splice(index, 1);
          if (this.lists.length === 0) { this.listLength$.next(false); }
        }
    );
  }


  async createCard(event) {

    const popover = await this.popoverCtrl.create({
      component: CreateCardPopoverComponent,
      event
    });

    popover.onDidDismiss().then(data => {
      if (data !== null) {
        if (data['data'] !== undefined) {

            let code = data["data"]["listName"];

            if(code.length === 6 && code.charAt(0) === "#"){

                this.addUserToList.addUser(code).subscribe(
                    data => this.lists.push(data)
                );

            }else {
                    this.shoplists.save(code).subscribe(
                        list => {
                            this.lists.push(list);
                            this.listLength$.next(true);
                        }
                    );
            }
        }
      }
    });

    return await popover.present();
  }


}
