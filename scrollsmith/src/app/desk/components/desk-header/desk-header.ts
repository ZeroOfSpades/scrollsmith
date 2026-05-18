import {Component, inject, Input} from '@angular/core';
import {RouterMethods} from '../../../router-methods';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DeskService } from '../../../services/desk.service';
import { DeskCard } from '../desk-card/desk-card';
import { ICard } from '../../../models/ICard';

@Component({
  selector: 'app-desk-header',
  imports: [ReactiveFormsModule],
  templateUrl: './desk-header.html',
  styleUrl: './desk-header.scss',
})
export class DeskHeader {
  rm:RouterMethods = inject(RouterMethods);
  ds:DeskService = inject(DeskService);

  deskForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    icon: new FormControl('')
  });
  @Input() cards: ICard[] = [];
};
