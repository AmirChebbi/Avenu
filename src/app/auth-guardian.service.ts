// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService} from "./user-service.service";
import {User} from "./User";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardianService implements CanActivate {

  constructor(private authService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated && this.authService.userAuth?.role == "admin") {
      return true; // Admins can access the route
    } else if (this.authService.isAuthenticated) {
      this.router.navigate(['']); // Redirect clients to product overview
      return false;
    } else {
      this.router.navigate(['/login']); // Redirect unauthenticated users to login page
      return false;
    }
  }

}
