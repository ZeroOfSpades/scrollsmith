import {AfterViewInit, Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import {RouterMethods} from '../../router-methods';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-new-desk',
  imports: [],
  templateUrl: './new-desk.html',
  styleUrl: './new-desk.scss',
})
export class NewDesk implements AfterViewInit {
  rm = inject(RouterMethods);

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#newdesk-scroll-bg", {
      right: "-500px",
      height: "20px",
      duration: 3,
      scrollTrigger: {
        trigger: "#explore-frame",
        endTrigger: "#newdesk-frame",
        start: "bottom 10%",
        end: "bottom 30%",
        markers: true,
        scrub: true,
        pin: true
      }
    });
  }
}
