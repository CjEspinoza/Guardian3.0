import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Sched } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ItemService } from '../_services/item.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {
  userDetails;
  scheds:Sched[];
 sched: Sched ={
   id:'',
   imgLink:''
 }
  constructor(private router : Router, 
    private itemService: ItemService,
    private afs: AngularFirestore,
    public userService: UserService) { }

  ngOnInit(): void {
    this.itemService.getSched().subscribe(scheds => {
      this.scheds = scheds;
    })
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err=>{}
    );
  }
  blogPage(){
    this.router.navigate(['/update-page']);
    document.getElementById('blogIcon').style.backgroundColor = "rgba(190, 190, 190, 0.116)";
    document.getElementById('trophyIcon').style.backgroundColor = "transparent";
    document.getElementById('homeIcon').style.backgroundColor = "transparent";
    document.getElementById('contactIcon').style.backgroundColor = "transparent";
  }
  deleteSched(event, sched: Sched){
    this.itemService.deleteSched(sched);
  }
}
