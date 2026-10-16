import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ICard} from '../../../models/ICard';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-desk-card',
  imports: [ReactiveFormsModule, NgOptimizedImage],
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
  @Input() conn: string = "";
  @Input() cards: ICard[] = [];

  @Output() cardSaved = new EventEmitter<{id: number, name: string, icon: string, desc: string, conn: string}>();
  @Output() cardDeleted = new EventEmitter<number>();

  constructor() {
    this.cardForm = this.fb.nonNullable.group({
      Name: '',
      Icon: '',
      Description: '',
      Connection: '',
    });
  }



  saveCard() {
    this.name = this.cardForm.get('Name')?.value;
    this.icon = this.cardForm.get('Icon')?.value;
    this.desc = this.cardForm.get('Description')?.value;
    this.conn = this.cardForm.get('Connection')?.value;
    console.log("Saving card:", this.name, this.icon, this.desc, this.conn);
    if (this.id !== undefined) {
      this.cardSaved.emit({
        id: this.id,
        name: this.name,
        icon: this.icon,
        desc: this.desc,
        conn: this.conn,
      });
    }
  }

  deleteCard() {
    if (this.id !== undefined) {
      this.cardDeleted.emit(this.id);
    }
  }
}
