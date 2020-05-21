import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit, AfterViewInit {

  @Input() listOfCards;
  @Output() cardId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private nav: NavController) { }


  ngAfterViewInit() {
    console.log(this.listOfCards);
  }

  ngOnInit() {

  }

  openCard() {
    this.nav.navigateForward("/tabs/lists/1");

  }

  deleteCard(cardID: number) {
    this.cardId.emit(cardID);
  }

}
