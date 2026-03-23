import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {AppRouter} from './app-router/app-router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, Footer, AppRouter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('scrollsmith');


}
