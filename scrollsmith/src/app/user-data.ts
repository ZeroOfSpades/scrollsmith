import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  currentUserId:(number|null) = null;

  users = [
    {
      userName: 'Sponge12',
      email: 'bob2@gmail.com'
    },
    {
      userName: 'Hermes76',
      email: 'mercur15@gmail.com'
    }
  ]
}
