import { Component } from '@angular/core';
import {DeskHeader} from './components/desk-header/desk-header';
import {DeskField} from './components/desk-field/desk-field';

@Component({
  selector: 'app-desk',
  imports: [
    DeskHeader,
    DeskField
  ],
  templateUrl: './desk.html',
  styleUrl: './desk.scss',
})
export class Desk {

}
