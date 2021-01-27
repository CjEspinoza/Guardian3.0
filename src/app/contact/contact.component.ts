import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message:string;
  name:string;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  appendMailTo(){
    this.message = this.message;
    this.name = this.name;

  }
  home(){
    this.router.navigate(['/home']);
    document.getElementById('homeIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('blogIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
  }
  tournamentPage(){
    this.router.navigate(['/tournament-home']);
    document.getElementById('trophyIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
    document.getElementById('blogIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
}
  blogPage(){
    this.router.navigate(['/update-page']);
    document.getElementById('blogIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
  }
}
