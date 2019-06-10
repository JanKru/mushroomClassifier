import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
/** own created SERVICES */
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  constructor(private fb: FormBuilder,  private authenticationService: AuthenticationService, private router: Router) { }

  /** methods for signIn formgroup */
  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

    /** methods for register formgroup */
    get emailReg() {
      return this.registerForm.get('emailReg');
    }

    get passwordReg() {
      return this.registerForm.get('passwordReg');
    }

    get passwordConfermationReg() {
      return this.registerForm.get('passwordConfermationReg');
    }
  private passwortHide: boolean;
  private formError = {
    signInError: false,
    registerError: false,
    errorMessage: null,
    successfullyRegistered: false,
  };

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  registerForm = this.fb.group({
    emailReg: ['', [Validators.required, Validators.email]],
    passwordReg: ['', Validators.required],
    passwordConfermationReg: ['', Validators.required],
  });

  ngOnInit() {
    this.passwortHide = true;
  }

  /**
   * function is called when sign in form is submitted
   */
  onSignInFormSubmit() {
    this.authenticationService.login(this.signInForm.value).subscribe(
      res => {
        // tslint:disable-next-line:no-string-literal
        this.authenticationService.storeTokenLocal(res['token']);
        this.router.navigateByUrl('/mushroomClassifier');
      },
      err => {
        this.formError.signInError = true;
        this.formError.errorMessage = err.error.message;
      }
    );
  }

  /**
   * function is called when register form is submitted
   */
  onRegisterFormSubmit() {
    // TODO: create validator for email confermation
    if (this.registerForm.value.passwordReg !== this.registerForm.value.passwordConfermationReg ) {
      this.formError.registerError = true;
      this.formError.errorMessage = 'Check if both passwords are the same';
    } else if (this.registerForm.value.passwordReg === this.registerForm.value.passwordConfermationReg ) {
      this.formError.registerError = false;
      const registerCredentials = {
      email: this.registerForm.value.emailReg,
      password: this.registerForm.value.passwordReg
    };
      this.authenticationService.register(registerCredentials).subscribe(
      res => {
        this.formError.successfullyRegistered = true;
      },
      err => {
        this.formError.registerError = true;
        this.formError.errorMessage = err.error[0];
      }
    ); }
  }
}
