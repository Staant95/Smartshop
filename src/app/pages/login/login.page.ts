import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import {ActivatedRoute, Router} from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url: string = '/tabs/homepage';

  loginForm: FormGroup;


  constructor(private loginService: LoginService,
              private router: ActivatedRoute,
              private nav: Router,
              private fb: FormBuilder,
              private storage: Storage
              ) { }

  ngOnInit() {

    this.router.queryParams.
    subscribe(
        params => this.url = params['redirect']
    );
    
    
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
        Validators.minLength(8)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });

  }


  login() {
    this.loginService.login({email : "bob@gmail.com", password: "123"})
      .subscribe(
         () => {
          this.nav.navigateByUrl(this.url)
        }
      );


  }
}
