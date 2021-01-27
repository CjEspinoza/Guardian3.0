import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vid } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { ItemService } from 'src/app/_services/item.service';

@Component({
  selector: 'app-tournament-feature',
  templateUrl: './tournament-feature.component.html',
  styleUrls: ['./tournament-feature.component.css']
})
export class TournamentFeatureComponent implements OnInit {
  vids: Vid[];
  vid: Vid={
    id:'',
    vidLink:''
  }
  constructor(private router : Router, private itemService: ItemService, public userService: UserService) { }

  ngOnInit(): void {
    this.itemService.getVid().subscribe(vids => {
      this.vids = vids;
    })
  }
  deleteVid(event, vid: Vid){
    this.itemService.deleteVid(vid);
  }
}
