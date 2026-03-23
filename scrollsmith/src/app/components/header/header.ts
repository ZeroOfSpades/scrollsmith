import {Component, inject, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { RouterMethods } from '../../router-methods';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  rm = inject(RouterMethods);
}
