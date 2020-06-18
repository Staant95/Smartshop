import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ResetPasswordService} from "../../services/reset-password.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  resetForm: FormGroup;
  
  constructor(
      private fb: FormBuilder,
      private resetPasswordService: ResetPasswordService,
      private router: Router) { }

  ngOnInit() {
    this.resetForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(10),
        Validators.maxLength(30)
      ]],
      password: ['', [
          Validators.required,
          Validators.minLength(6)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  resetPassword() {
      this.resetPasswordService.resetPassword(this.resetForm.value).subscribe(
          _ => {
            this.resetForm.reset();
            this.router.navigateByUrl('/login');
          }
      );
  }

}
