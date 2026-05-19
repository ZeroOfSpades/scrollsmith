import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-desk-card',
  imports: [ReactiveFormsModule],
  templateUrl: './desk-card.html',
  styleUrl: './desk-card.scss',
})
export class DeskCard {
  private readonly fb: FormBuilder = new FormBuilder();
  readonly cardForm: FormGroup;
  @Input() id: number | undefined;
  @Input() x: number | undefined;
  @Input() y: number | undefined;
  @Input() name: string = "";
  @Input() icon: string = "";
  @Input() desc: string = "";

  @Output() cardSaved = new EventEmitter<{id: number, name: string, icon: string, desc: string}>();

  constructor() {
    this.cardForm = this.fb.nonNullable.group({
      Name: '',
      Image: '',
      Description: ''
    });
  }



  saveCard() {
    this.name = this.cardForm.get('Name')?.value;
    this.icon = this.cardForm.get('Image')?.value;
    this.desc = this.cardForm.get('Description')?.value;
    console.log("Saving card:", this.name, this.icon, this.desc);
    if (this.id !== undefined) {
      this.cardSaved.emit({
        id: this.id,
        name: this.name,
        icon: this.icon,
        desc: this.desc
      });
    }
  }
}
