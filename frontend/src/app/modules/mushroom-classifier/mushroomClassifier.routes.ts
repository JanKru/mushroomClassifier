import { Routes } from '@angular/router';
/** own created COMPONENTS */
import { MushroomClassifierComponent } from './components/mushroom-classifier/mushroom-classifier.component';
/** own created OTHER */
import { AuthenticationGuard } from '../../shared/guards/authentication.guard';

export const mushroomClassifierRoutes: Routes = [
 {
    path: 'mushroomClassifier', component: MushroomClassifierComponent, canActivate: [AuthenticationGuard]
 }
];