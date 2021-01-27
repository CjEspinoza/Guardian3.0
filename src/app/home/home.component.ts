import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marqs } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  marqs: Marqs[];
  marq: Marqs = {
    id:'',
    marqText:''
  }
  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
