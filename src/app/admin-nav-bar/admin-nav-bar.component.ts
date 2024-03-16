import { Component } from '@angular/core';
import {publishReplay} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-admin-nav-bar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './admin-nav-bar.component.html',
  styleUrl: './admin-nav-bar.component.css'
})
export class AdminNavBarComponent {
  isdown: boolean = false;

  protected readonly publishReplay = publishReplay;
}
