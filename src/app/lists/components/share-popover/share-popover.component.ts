import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { NavParams } from "@ionic/angular";


@Component({
  selector: 'app-share-popover',
  templateUrl: './share-popover.component.html',
  styleUrls: ['./share-popover.component.scss'],
})
export class SharePopoverComponent implements OnInit {

  @Input() props;

  constructor(private nav: NavParams) {
    this.props = nav.get('code');
  }

  ngOnInit() {}


  copyLink(link) {
    console.log(link);
  }
}
