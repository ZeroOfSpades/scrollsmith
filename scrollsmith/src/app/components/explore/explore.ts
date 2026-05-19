import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.scss',
})
export class Explore {
  constructor(private router: Router) { }

  goToExplore() : void {
    this.router.navigate(['explore']);
  }
}
