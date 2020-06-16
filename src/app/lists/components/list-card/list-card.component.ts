import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController, PopoverController} from "@ionic/angular";
import {SharePopoverComponent} from "../share-popover/share-popover.component";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit, AfterViewInit {

  @Input() listOfCards;
  @Output() cardId: EventEmitter<number> = new EventEmitter<number>();

  constructor(
      private nav: NavController,
      private popoverController: PopoverController) { }


  ngAfterViewInit() {
    console.log(this.listOfCards);
  }

  ngOnInit() {

  }

  async presentPopover(event: any, listId: number) {
    const popover = await this.popoverController.create({
      component: SharePopoverComponent,
      event: event,
      translucent: true,
      componentProps: {'listId' : listId }
    });
    return await popover.present();
  }

  deleteCard(cardID: number) {
    this.cardId.emit(cardID);
  }

}
