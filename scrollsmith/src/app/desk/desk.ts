import { Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import {DeskHeader} from './components/desk-header/desk-header';
import {DeskField} from './components/desk-field/desk-field';
import { DeskCard } from './components/desk-card/desk-card';
import { ICard } from '../models/ICard';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-desk',
  imports: [
    DeskHeader,
    DeskCard,
    DragDropModule
  ],
  templateUrl: './desk.html',
  styleUrl: './desk.scss'
})


export class Desk {

  name:string;
  icon:string;
  cardId: number = 0;
  cards: ICard[];
  cardX: number = 0;
  cardY: number = 0;


  constructor() {
    this.name = "My Desk";
    this.icon = "assets/default-desk-icon.png";
    this.cards = [];
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
      desc: "Description"
    }
    this.cards.push(newCard);
    console.log("Added card at:", x, y);
  }

  onCardSaved(cardData: {id: number, name: string, icon: string, desc: string}) {
    const card = this.cards.find(c => c.id === cardData.id);
    if (card) {
      card.name = cardData.name;
      card.icon = cardData.icon;
      card.desc = cardData.desc;
      console.log("Card saved:", card);
    }
  }
}
