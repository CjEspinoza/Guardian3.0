import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';


import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { AddPostComponent } from './add-post/add-post.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { ItemsComponent } from './items/items.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { ItemService } from './_services/item.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminComponent } from './admin/admin.component';
import { UpdagePageComponent } from './updage-page/updage-page.component';
import { AboutComponent } from './tournament/about/about.component';
import { TournamentFeatureComponent } from './tournament/tournament-feature/tournament-feature.component';
import { TournamentFooterComponent } from './tournament/tournament-footer/tournament-footer.component';
import { TournamentHomeComponent } from './tournament/tournament-home/tournament-home.component';
import { TournamentInfoComponent } from './tournament/tournament-info/tournament-info.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    HomeComponent,
    ScrollTopComponent,
    AddPostComponent,
    SideNavComponent,
    BulletinComponent,
    ItemsComponent,
    AdminComponent,
    UpdagePageComponent,
    AboutComponent,
    TournamentFeatureComponent,
    TournamentFooterComponent,
    TournamentHomeComponent,
    TournamentInfoComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard, UserService,ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
