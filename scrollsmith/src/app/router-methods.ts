import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterMethods {
  constructor(private router: Router) {}

  loggedIn = false;



  goTo(dest: string) : void {
    this.router.navigate([dest]);
  }
}
