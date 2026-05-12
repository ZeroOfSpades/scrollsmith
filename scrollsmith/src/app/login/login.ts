import {Component, inject} from '@angular/core';
import { RouterMethods } from '../router-methods';
import {FormGroup, FormsModule} from '@angular/forms';
import {UserData} from '../user-data';
import {UserService} from '../services/user.service';

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
  //ud = inject(UserData);
  us = inject(UserService);

  em:string = '';
  pw:string = '';


  warning = '';

  logIn() {
    this.us.login(this.em, this.pw)
      .then(() => {
        this.rm.loggedIn = true
        this.rm.goTo('home');
      })
      .catch(err => {
        this.warning = err;
      });
  }

  /*
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

   */
}
