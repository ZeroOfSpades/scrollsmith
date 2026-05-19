import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-explore-card',
  imports: [],
  templateUrl: './explore-card.html',
  styleUrl: './explore-card.scss',
})
export class ExploreCard {
  @Input() name: string = '';
  @Input() icon: string = '';
}
