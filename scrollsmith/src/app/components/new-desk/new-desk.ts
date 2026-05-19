import {Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import {RouterMethods} from '../../router-methods';

@Component({
  selector: 'app-new-desk',
  imports: [],
  templateUrl: './new-desk.html',
  styleUrl: './new-desk.scss',
})
export class NewDesk {
  rm = inject(RouterMethods);

}
