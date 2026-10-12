import {AfterViewInit, Component} from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.scss',
})
export class Explore implements AfterViewInit {
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#explore-scroll-bg", {
      left: "-500px",
      height: "20px",
      duration: 3,
      scrollTrigger: {
        trigger: "app-hero",
        endTrigger: "#explore-frame",
        start: "bottom 10%",
        end: "bottom 30%",
        markers: true,
        scrub: true,
        pin: true,
      }
    });
  }

  goToExplore() : void {
    this.router.navigate(['explore']);
  }
}
