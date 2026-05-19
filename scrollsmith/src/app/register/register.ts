import {Component, inject} from '@angular/core';
import {RouterMethods} from '../router-methods';
import {UserData} from '../user-data';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  rm = inject(RouterMethods);
  ud = inject(UserData);
  us = inject(UserService);


  un:string = 'default';
  em:string = 'default@default.hu';
  pw:string = 'default';

  warning = '';

  registerForm: FormGroup;
  fb: FormBuilder = new FormBuilder();

  constructor() { 
    this.registerForm = this.fb.group({
      username: '',
      email: '',
      password: ''
    });
  }

  signUp() {
    this.un = this.registerForm.get('username')?.value;
    this.em = this.registerForm.get('email')?.value;
    this.pw = this.registerForm.get('password')?.value;
    this.us.signup(this.un, this.em, this.pw)
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
  signUp() {
    if (this.un != null && this.em != null) {
      this.rm.loggedIn = true;
      this.ud.users.push({
        userName: this.un,
        email: this.em
      });
      this.ud.currentUserId = this.ud.users.length-1;
      this.rm.goTo('home');

    }
    console.log(this.ud.users);
  }

   */
}
