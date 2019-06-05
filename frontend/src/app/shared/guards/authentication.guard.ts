import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
/** own created stuff */
import { AuthenticationService } from '../../modules/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private _authenticationService: AuthenticationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this._authenticationService.isLoggedIn()) { // if user is not logged in redirect to sign in
      this.router.navigateByUrl('/sign-in');
      this._authenticationService.deleteTokenLocal();
      return false;
    }
    return true;
  }
}
