import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {NgIf} from "@angular/common";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MenuComponent,
    NgIf,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0%)'
      })),
      state('out', style({
        transform: 'translateX(100%)'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})

export class NavigationComponent {
  clicked: boolean =false;
  sidebar = document.querySelectorAll('.global-hidden');

  changeState(){
    this.clicked=!this.clicked;
  }
}
