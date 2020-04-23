import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { RedirectAfterLoginService } from "../../services/redirect-after-login.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService,
              private router: NavController,
              private redirectUrl: RedirectAfterLoginService) { }

  ngOnInit() {

  }



  login() {
    console.log('login called')
    this.loginService.login({email : "stas@gmail.com", password: "123"}).subscribe();
    console.log('subscribed to login service')
    this.router.navigateForward(this.redirectUrl.redirectUrl);
  }
}
