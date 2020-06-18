import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController, PopoverController} from "@ionic/angular";
import {SharePopoverComponent} from "../share-popover/share-popover.component";
import {Storage} from "@ionic/storage";
import {from, Observable} from "rxjs";
import {UtentiListaService} from "../../../services/utenti-lista.service";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  @Input() listOfCards;
  @Output() cardId: EventEmitter<number> = new EventEmitter<number>();
  usersOfCard: Observable<any>;

  constructor(
      private nav: NavController,
      private store: Storage,
      private popoverController: PopoverController,
      private utentiLista: UtentiListaService ) { }


  ngOnInit() {
    this.usersOfCard = this.utentiLista.getAllUser(this.listOfCards.id);
  }

  async presentPopover(event: any) {
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
