import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url: string;
  constructor(private loginService: LoginService,
              private router: ActivatedRoute,
              private nav: Router) { }

  ngOnInit() {
    this.router.queryParams.
    subscribe(
        params => this.url = params['redirect']
    );
  }


  login() {
    this.loginService.login({email : "stas@gmail.com", password: "123"}).subscribe(
        () => {
          this.nav.navigateByUrl('/tabs/lists')
        }
    );
  }
}
