import { Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import {DeskHeader} from './components/desk-header/desk-header';
import {DeskField} from './components/desk-field/desk-field';
import { DeskCard } from './components/desk-card/desk-card';
import { ICard } from '../models/ICard';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {AsyncPipe} from '@angular/common';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-desk',
  imports: [
    DeskHeader,
    DeskCard,
    DragDropModule,
    AsyncPipe
  ],
  templateUrl: './desk.html',
  styleUrl: './desk.scss'
})


export class Desk {

  id: number;
  name:string;
  icon:string;
  cardId: number = 0;
  cards: ICard[];
  cards$: Observable<ICard[]>;
  cardX: number = 0;
  cardY: number = 0;


  constructor() {
    this.id = 0;
    this.name = "My Desk";
    this.icon = "assets/default-desk-icon.png";
    this.cards = [];
    this.cards$ = of(this.cards);
  }

  saveDesk() {
    console.log("Saving desk:", this.name, this.icon);

  }

  addCard(x: number, y: number) {
    const newCard: ICard = {
      id: this.cardId++,
      x: x,
      y: y,
      name: "New Card",
      icon: "assets/default-card-icon.png",
      desc: "Description",
      conn: "",
    }
    this.cards.push(newCard);
    console.log("Added card at:", x, y);
  }

  onCardSaved(cardData: {id: number, name: string, icon: string, desc: string, conn: string}) {
    const card = this.cards.find(c => c.id === cardData.id);
    if (card) {
      card.name = cardData.name;
      card.icon = cardData.icon;
      card.desc = cardData.desc;
      card.conn = cardData.conn;
      console.log("Card saved:", card);
    }
  }

  onCardDeleted(cardId: number) {
    this.cards = this.cards.filter(c => c.id !== cardId);
    console.log("Card deleted with id:", cardId);
  }
}
