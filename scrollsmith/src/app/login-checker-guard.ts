import { Router, CanActivateFn } from '@angular/router';
import { RouterMethods} from './router-methods';
import {inject} from '@angular/core';



export const loginCheckerGuard: CanActivateFn = (route, state) => {
  const rm = inject(RouterMethods);
  const router = inject(Router);

  return rm.loggedIn ? true : router.parseUrl('/login');
};
