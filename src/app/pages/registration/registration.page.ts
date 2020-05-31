import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {RegistrationService} from "../../services/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private registrationService: RegistrationService,
              private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      nome: ['', [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(16)
      ]],
      eta: ['',[
        Validators.required,
        Validators.min(6),
        Validators.max(99)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(8),
        Validators.maxLength(40)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      conf_password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]]
    });


    
  }


  registration() {
    let newObj= delete this.registrationForm.value['conf_password'];
    // default values for json-server
    this.registrationForm.value['avatar'] = 'https://cdn1.iconfinder.com/data/icons/people-cultures/512/_indian_man-512.png';
    this.registrationForm.value['token'] = '23asdl12oiasdasdqw';
    this.registrationService.register(this.registrationForm.value).subscribe(
        _ => this.router.navigateByUrl('/login')
    );
  }
}
