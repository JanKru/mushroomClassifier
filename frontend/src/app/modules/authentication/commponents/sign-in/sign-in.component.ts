import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatIconRegistry } from '@angular/material';
/** own created SERVICES */
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,  private authenticationService: AuthenticationService, private router: Router) { }

  /** methods for signIn formgroup */
  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  ngOnInit() {
  }

  /**
   * function is called when sign in form is submitted
   */
  onSignInFormSubmit() {
    this.authenticationService.login(this.signInForm.value).subscribe(
      res => {
        this.authenticationService.storeTokenLocal(res['token']);
        this.router.navigateByUrl('/mushroomClassifier');
      },
      err => {
      }
    );
  }
}
