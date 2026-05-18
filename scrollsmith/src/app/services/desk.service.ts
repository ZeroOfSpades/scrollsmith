import { inject, Injectable } from '@angular/core';
import { ICard } from '../models/ICard';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Desk } from '../desk/desk';
import { DeskCard } from '../desk/components/desk-card/desk-card';

@Injectable({
  providedIn: 'root',
})
export class DeskService {
  private fs = inject(Firestore);
  constructor() {}

  public async saveDesk(name: string, icon: string, cards: ICard[]) {
    await setDoc(doc(this.fs, 'desks'), {
      name: name,
      icon: icon,
      cards: cards.map(card => ({
        id: card.id,
        x: card.x,
        y: card.y,
        name: card.name,
        icon: card.icon
      }))
    });
  }
}