import {Component, inject} from '@angular/core';
import { RouterMethods } from '../router-methods';
import {FormsModule} from '@angular/forms';
import {UserData} from '../user-data';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  rm = inject(RouterMethods);
  ud = inject(UserData);

  un:string = '';
  em:string = '';

  warning = '';

  logIn() {
    for (let i = 0; i < this.ud.users.length; i++) {
      if(this.ud.users[i].userName == this.un) {
        if(this.ud.users[i].email == this.em) {
          this.rm.loggedIn = true;
          this.ud.currentUserId = i;
          this.rm.goTo('home');
        }
        this.warning="Wrong email!"
      }
    }
    this.warning="There's no username like this..."

  }
}
