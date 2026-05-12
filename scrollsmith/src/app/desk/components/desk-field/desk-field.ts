import {Component, inject} from '@angular/core';
import { ContextMenu } from './components/context-menu/context-menu';
import {UserService} from '../../../services/user.service';
import {DBConfig} from '../../../dbconfig';

@Component({
  selector: 'app-desk-field',
  imports: [],
  templateUrl: './desk-field.html',
  styleUrl: './desk-field.scss',
})

export class DeskField {
  base = document.getElementById("desk-base");
  //us: UserService = inject(UserService);
  dbc!:DBConfig;
  cmenu = ContextMenu;
  menuPosition = {
    x: 0,
    y: 0
  };

  constructor(dbc: DBConfig) {
    this.dbc = dbc;


  }

  clickEvent(event: MouseEvent) {

    console.log('clicked');
    /*
    this.us.addScrollIDB({
      name: 'test',
      icon: '',
      position: {
        x: event.clientX,
        y: event.clientY
      }
    })
      .then((res) => {
        console.log(res);
      })

     */
    if (this.dbc.dbCreated) {
      this.dbc.addData({
        name: 'test',
        icon: '',
        position: {
          x: event.clientX,
          y: event.clientY
        }
      });
    }

  }


  protected readonly screenX = screenX;
}
