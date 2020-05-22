import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-create-shoplist-modal',
  templateUrl: './create-shoplist-modal.page.html',
  styleUrls: ['./create-shoplist-modal.page.scss'],
})
export class CreateShoplistModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async dismiss() {
    await this.modalCtrl.dismiss({

    });
  }


  async sendData(listName: string) {
    await this.modalCtrl.dismiss({
      "listName" : listName
    });
  }

}
