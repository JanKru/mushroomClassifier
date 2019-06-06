import { Routes } from '@angular/router';
/** own created COMPONENTS */
import { SignInComponent } from './modules/authentication/commponents/sign-in/sign-in.component';

export const routes: Routes = [
    {
      path: '', redirectTo: 'sign-in', pathMatch: 'full'
    },
    {
      path: '**', component: SignInComponent
    }
  ];
  