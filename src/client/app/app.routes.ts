import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';
import { UserRoutes } from './user/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LoginRoutes,
  ...UserRoutes,
];
