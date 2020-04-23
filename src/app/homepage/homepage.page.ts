import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Observable} from "rxjs";
import {Storage} from "@ionic/storage";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('auth_token').then(val => console.log(val))
  }


}
