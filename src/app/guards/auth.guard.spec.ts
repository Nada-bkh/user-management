import { AuthGuard } from './auth.guard';
import {Routes} from "@angular/router";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {AdminDashboardComponent} from "../admin-dashboard/admin-dashboard.component";
import {UserProfileComponent} from "../user-profile/user-profile.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    data: { role: 'userSimple' },
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
