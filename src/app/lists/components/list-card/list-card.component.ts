import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {}

  openCard() {
    this.nav.navigateForward("/tabs/lists/1")
  }

}
