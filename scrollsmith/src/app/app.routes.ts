import { Routes } from '@angular/router';
import {App} from './app';
import {Register} from './register/register';
import {Login} from './login/login';
import {User} from './user/user';
import {Profile} from './profile/profile';
import {Desk} from './desk/desk';
import {Settings} from './settings/settings';
import {Explore} from './explore/explore';
import {AppMain} from './app-main/app-main';
import {AppRouter} from './app-router/app-router';
import {loginCheckerGuard} from './login-checker-guard';

export const routes: Routes = [
  {
    path: '',
    title: 'bla',
    component: AppRouter,
    children: [
      {
        path: 'home',
        title: 'Scrollsmith',
        component: AppMain
      },
      {
        path: 'register',
        title: 'Sign-up',
        component: Register,
      },
      {
        path: 'login',
        title: 'Login',
        component: Login,
      },
      {
        path: 'settings',
        title: "Settings",
        component: Settings
      },
      {
        path: 'explore',
        title: "Explore",
        component: Explore
      },
      {
        path: 'new',
        component: Desk
      },
      {
        path: 'users/:user',
        component: User,
        canActivate: [loginCheckerGuard],
        children: [
          {
            path: 'profile',
            title: 'Profile',
            component: Profile
          },
          {
            path: ':deskId',
            title: 'Profile',
            component: Desk
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
