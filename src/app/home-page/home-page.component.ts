import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FooterComponent,
    NavigationComponent,
    RouterOutlet
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
