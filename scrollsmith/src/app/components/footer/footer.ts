import { Component } from '@angular/core';
import { Observable, of, map, interval } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  pressedBall$ = new Observable<number>((subscriber) => {
    const balls = document.querySelectorAll('#balls div');
    balls.forEach((ball, index) => {
      ball.addEventListener('click', (e: Event) => {
        e.preventDefault();
        subscriber.next(index);
      });
    });
  });

  ballInterval$: Observable<number>;

  constructor() {
    this.pressedBall$.subscribe({
      next: (value: number) => {
        document.getElementById("ball" + (value + 1))?.classList.add("pressed");
        setTimeout(() => {
          document.getElementById("ball" + (value + 1))?.classList.remove("pressed");
        }, 200);
        console.log("Ball pressed:", value);
      },
      error: (err: unknown) => {
        console.error('Error in pressedBall$ observable:', err);
      },
      complete: () => {
        console.log('pressedBall$ observable completed');
      }
    });
    this.ballInterval$ = interval(1000).pipe(
      map(i => i % 5)
    );
    this.ballInterval$.subscribe({
      next: (value: number) => {
        document.getElementById("ball" + (value + 1))?.classList.add("active");
        document.getElementById("ball" + (value - 1))?.classList.remove("active");
      }
    });
  }

  

}
