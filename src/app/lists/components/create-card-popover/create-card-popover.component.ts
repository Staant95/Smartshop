import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-create-card-popover',
  templateUrl: './create-card-popover.component.html',
  styleUrls: ['./create-card-popover.component.scss'],
})
export class CreateCardPopoverComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}


  async onSubmit(listName: string) {
    if(listName.trim() === "") await this.popoverCtrl.dismiss();
    // logica per determinare se e' un codice o nome card

    await this.popoverCtrl.dismiss({
      "listName" : listName
    });
  }


}
