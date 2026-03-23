import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-desk',
  imports: [],
  templateUrl: './new-desk.html',
  styleUrl: './new-desk.scss',
})
export class NewDesk {

  constructor(private router: Router) { }

  goToNewDesk(): void {
    this.router.navigate(['new']);
  }
}
