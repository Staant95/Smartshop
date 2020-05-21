import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import {StorageService} from "../services/storage.service";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  private test;
  constructor(private storage: Storage,
              private storageService: StorageService,
  ) { }

  isDisabled;

  ngOnInit() {
    this.storageService.save({"name" : "stas", "age" : 25}).subscribe(console.log);

  }





}
