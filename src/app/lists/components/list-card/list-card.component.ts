import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController, PopoverController} from "@ionic/angular";
import {SharePopoverComponent} from "../share-popover/share-popover.component";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  @Input() listOfCards;
  @Output() cardId: EventEmitter<number> = new EventEmitter<number>();

  constructor(
      private nav: NavController,
      private popoverController: PopoverController) { }


  ngOnInit() {

  }

  async presentPopover(event: any, listId: number) {
    const popover = await this.popoverController.create({
      component: SharePopoverComponent,
      event,
      translucent: true,
      componentProps: {'code' : this.listOfCards['share-code'] }
    });
    return await popover.present();
  }

  deleteCard(cardID: number) {
    this.cardId.emit(cardID);
  }

}
