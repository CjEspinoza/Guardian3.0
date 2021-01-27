import { Component, OnInit } from '@angular/core';
import { Updates } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ItemService } from '../_services/item.service';

@Component({
  selector: 'app-updage-page',
  templateUrl: './updage-page.component.html',
  styleUrls: ['./updage-page.component.css']
})
export class UpdagePageComponent implements OnInit {
  constructor(private itemService: ItemService, public userService : UserService) { }
  userDetails;
  updates: Updates[];
  update: Updates ={
    id:'',
    uText:'',
    date:'',
    imgLink:'',
    title:''
  }
  ngOnInit(): void {
    this.itemService.getUpdates().subscribe(updates => {
      this.updates = updates;
    })
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err=>{}
    );
  }
  deleteUpdate(event, update: Updates){
    this.itemService.deleteUpdates(update);
  }
}
