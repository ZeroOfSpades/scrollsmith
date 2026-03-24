import {Component, inject} from '@angular/core';
import {RouterMethods} from '../../../router-methods';

@Component({
  selector: 'app-desk-header',
  imports: [],
  templateUrl: './desk-header.html',
  styleUrl: './desk-header.scss',
})
export class DeskHeader {
  rm:RouterMethods = inject(RouterMethods);
};
