import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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

  }
}
