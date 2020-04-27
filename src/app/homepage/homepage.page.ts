import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Observable} from "rxjs";
import {Storage} from "@ionic/storage";
import {StorageService} from "../services/storage.service";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  private test;
  constructor(private storage: Storage, private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.save({"name" : "stas", "age" : 25}).subscribe(console.log)
  }


}
