import {Component, inject} from '@angular/core';
import {RouterMethods} from '../router-methods';
import {UserData} from '../user-data';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  rm = inject(RouterMethods);
  ud = inject(UserData);



  un:string = 'default';
  em:string = 'default@default.hu';

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
}
