import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brackets } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { ItemService } from 'src/app/_services/item.service';

@Component({
  selector: 'app-tournament-info',
  templateUrl: './tournament-info.component.html',
  styleUrls: ['./tournament-info.component.css']
})
export class TournamentInfoComponent implements OnInit {
  brackets: Brackets[];
  bracket: Brackets={
    id:'',
    bLink:''
  }
  constructor(private router : Router, private itemService: ItemService, public userService : UserService) { }

  ngOnInit(): void {
    this.itemService.getBracket().subscribe(brackets=>{
      this.brackets = brackets;
    })
  }
  deleteBracket(event, bracket: Brackets){
    this.itemService.deleteBracket(bracket);
  }
}