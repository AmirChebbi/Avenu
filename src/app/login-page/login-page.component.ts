import {Component, inject, Injectable} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user-service.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  routes = inject(ActivatedRoute)
  userService = inject(UserService)
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  login(){
    return this.userService.authenticateUserByCredentials(
      this.loginForm.value.email ?? "",
      this.loginForm.value.password ?? ""
    );
  }
}
