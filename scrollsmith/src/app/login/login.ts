import {Component, inject} from '@angular/core';
import { RouterMethods } from '../router-methods';
import {Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserData} from '../user-data';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  rm = inject(RouterMethods);
  ud = inject(UserData);
  us = inject(UserService);

  em:string = '';
  pw:string = '';


  warning = '';

  fb: FormBuilder = new FormBuilder();
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  logIn() {
    this.em = this.loginForm.get('email')?.value;
    this.pw = this.loginForm.get('password')?.value;
    this.us.login(this.em, this.pw)
      .then((user) => {
        this.rm.loggedIn = true;
        this.ud.currentUserId = user.id;
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
