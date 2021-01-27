import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UpdagePageComponent } from './updage-page/updage-page.component';
import { TournamentHomeComponent } from './tournament/tournament-home/tournament-home.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'login', component: UserComponent, children:[{path: '',component: SignInComponent}]},
  {path: 'signup', component: UserComponent, children:[{path: '',component: SignUpComponent}]},
  { path: 'Admin', component:AdminComponent, canActivate:[AuthGuard]},
  { path: 'tournament-home', component: TournamentHomeComponent, canActivate: [AuthGuard]},
  { path: 'updage-page', component: UpdagePageComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
];
