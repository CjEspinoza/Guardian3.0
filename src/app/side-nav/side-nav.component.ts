import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  userDetails: any;
  constructor(private breakpointObserver: BreakpointObserver,public userService: UserService,private router: Router) { }

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
    document.getElementById('tournament').style.backgroundColor = "transparent";
    document.getElementById('updates').style.backgroundColor = "transparent";
    document.getElementById('contacts').style.backgroundColor = "transparent";
}
  tournamentPage(){
    this.router.navigate(['/tournament-home']);
    document.getElementById('tournament').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('Home').style.backgroundColor = "transparent";
    document.getElementById('updates').style.backgroundColor = "transparent";
    document.getElementById('contacts').style.backgroundColor = "transparent";
}
  blogPage(){
    this.router.navigate(['/update-page']);
    document.getElementById('updates').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('tournament').style.backgroundColor = "transparent";
    document.getElementById('Home').style.backgroundColor = "transparent";
    document.getElementById('contacts').style.backgroundColor = "transparent";
}
  contactPage(){
    this.router.navigate(['/contact']);
    document.getElementById('contacts').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('tournament').style.backgroundColor = "transparent";
    document.getElementById('updates').style.backgroundColor = "transparent";
    document.getElementById('Home').style.backgroundColor = "transparent";
}
  dashboard(){
    this.router.navigate(['/Admin']);
    document.getElementById('contacts').style.backgroundColor = "transparent";
    document.getElementById('tournament').style.backgroundColor = "transparent";
    document.getElementById('updates').style.backgroundColor = "transparent";
    document.getElementById('Home').style.backgroundColor = "transparent";
}
  logout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
}
}
