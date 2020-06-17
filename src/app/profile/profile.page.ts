import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Storage} from "@ionic/storage";
import {LoginService} from "../services/login.service";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userAvatar: string;

  constructor(
      private router: Router,
      private storage: Storage,
      private loginService: LoginService,
      private storageService: StorageService) { }

  ngOnInit() {
      this.storage.get('avatar').then(data => this.userAvatar = data);
  }
    upload(str:any)
    {

    }

  logout() {
    //clear local storage
    //navigate to login
    this.storage.clear().then(
        _ => {
          this.loginService.isLogged$.next(false);
          this.router.navigateByUrl('/login');
        }
    );
  }

    setNotificheOfferte(value) {
      this.storageService.save({"notifiche_offerte" : value});
    }
    setNotificheListe(value) {
        this.storageService.save({"notifiche_liste" : value});
    }

}
