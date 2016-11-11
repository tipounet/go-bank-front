import { Route } from '@angular/router';
import { UserComponent } from './index';
import {AuthGuard} from '../shared/services/index';

export const UserRoutes: Route[] = [
  {
    path: '/user',
    component: UserComponent,
    canActivate: [AuthGuard]
  }
];
