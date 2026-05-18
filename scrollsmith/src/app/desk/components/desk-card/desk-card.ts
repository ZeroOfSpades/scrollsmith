import { Component, Inject, Input } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-desk-card',
  imports: [],
  templateUrl: './desk-card.html',
  styleUrl: './desk-card.scss',
})
export class DeskCard {
  private readonly fb: FormBuilder = new FormBuilder();
  @Input() id: number | undefined;
  @Input() x: number | undefined;
  @Input() y: number | undefined;
  @Input() name: string;
  @Input() icon: string;

  constructor() {
    this.name = "New Card";
    this.icon = "assets/default-card-icon.png";
  }

  readonly cardForm = this.fb.nonNullable.group({
    
  });
}
