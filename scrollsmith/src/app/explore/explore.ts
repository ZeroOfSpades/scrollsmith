import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ExploreCard } from './components/explore-card/explore-card';
import { DeskService } from '../services/desk.service';
import { Desk } from '../desk/desk';

@Component({
  selector: 'app-explore',
  imports: [RouterModule, ExploreCard],
  templateUrl: './explore.html',
  styleUrl: './explore.scss',
})
export class Explore {
  
  
  deskService = new DeskService();
  desks: Desk[] = [];

  constructor() {
    this.deskService.getDesks().then(desks => {
      console.log('desks got' + desks.length);
      this.desks = desks;
    });
  }
  

  
}
