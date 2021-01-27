import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userDetails;
  title = 'Guardian';
  clicked:boolean = false;
  activePage:boolean = false;
  constructor(public userService : UserService,private router: Router) {
  }
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err=>{}
    );
  }
  home(){
    this.router.navigate(['/home']);
    document.getElementById('homeIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('blogIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
  }
  tournamentPage(){
    document.getElementById('trophyIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
    document.getElementById('blogIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
    this.router.navigate(['/tournament-home']);
}
  blogPage(){
    document.getElementById('blogIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
    this.router.navigate(['/updage-page']);
  }
  contactPage(){
    document.getElementById('contactIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('blogIcon').style.backgroundColor = "transparent";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
      this.router.navigate(['/contact']);
  }
  dashboard(){
      this.router.navigate(['/Admin']);
  }
  logout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
}
}
