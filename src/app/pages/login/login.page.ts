import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { RedirectAfterLoginService } from "../../services/redirect-after-login.service";
import {NavController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url: string;
  constructor(private loginService: LoginService,
              private router: ActivatedRoute,
              private nav: Router,
              private storage: Storage,
              private redirectUrl: RedirectAfterLoginService) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => this.url = params['redirect'])

  }



  login() {

    this.loginService.login({email : "stas@gmail.com", password: "123"}).subscribe(
        () => {
          this.nav.navigateByUrl('/tabs/lists')
        }
    );

    //this.nav.navigateByUrl(this.url).then(r => console.log('completed..'));
    console.log('hit the nav')
  }
}
