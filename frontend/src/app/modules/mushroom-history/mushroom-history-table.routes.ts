import { Routes } from '@angular/router';
/** own created COMPONENTS */
import { MushroomHistroyTableComponent } from './components/mushroom-histroy-table/mushroom-histroy-table.component';
/** own created OTHER */
import { AuthenticationGuard } from '../../shared/guards/authentication.guard';

export const mushroomHistoryTableRoutes: Routes = [
 {
    path: 'mushroomHistory', component: MushroomHistroyTableComponent, canActivate: [AuthenticationGuard]
 }
];