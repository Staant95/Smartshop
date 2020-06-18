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
      name: ['', [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(16)
      ]],
      lastname: ['',[
        Validators.required,
        Validators.minLength(5)
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
    this.registrationService.register(this.registrationForm.value).subscribe(
        _ => {
          this.registrationForm.reset();
          this.router.navigateByUrl('/login')
        }
    );
  }
}
