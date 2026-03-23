import { Component } from '@angular/core';
import {Explore} from "../components/explore/explore";
import {Footer} from "../components/footer/footer";
import {Header} from "../components/header/header";
import {Hero} from "../components/hero/hero";
import {NewDesk} from "../components/new-desk/new-desk";
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-main',
    imports: [
        Explore,
        Footer,
        Header,
        Hero,
        NewDesk
    ],
  templateUrl: './app-main.html',
  styleUrl: './app-main.scss',
})
export class AppMain {

}
