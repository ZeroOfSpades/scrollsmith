import {Component, inject} from '@angular/core';
import { RouterMethods } from '../router-methods';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  rm = inject(RouterMethods);

  logIn() {
    this.rm.loggedIn = true;
    this.rm.goTo('home')

  }
}
