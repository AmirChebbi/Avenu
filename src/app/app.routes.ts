import { Routes } from '@angular/router';
import {AuthenticationPageComponent} from "./authentication-page/authentication-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";

export const routes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationPageComponent,
    title: "Authentication"
  },
  {
    path : '',
    component: HomePageComponent,
    title: "Avenu"
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    title:"Admin"
  }
];
