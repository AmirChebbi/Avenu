import { Component } from '@angular/core';
import {LoginPageComponent} from "../login-page/login-page.component";
import {SignupPageComponent} from "../signup-page/signup-page.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [
    LoginPageComponent,
    SignupPageComponent,
    NgIf
  ],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.css'
})
export class AuthenticationPageComponent {
  login:boolean = true;

  changeFunction(){
    this.login= !this.login;
  }
}
