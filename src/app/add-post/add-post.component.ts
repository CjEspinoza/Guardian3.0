import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsItem, Item } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ItemService } from '../_services/item.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  userDetails;
  now = new Date();
  comments: CommentsItem[];
  post: Item = {
    id:'',
    post: '',
    codename:'',
    ups:0,
    downs:0,
    timeDate: ''
  }
  comment: CommentsItem = {
    id:'',
    comment:'',
    commentcodename:'',
    postid:''
  }
  constructor(private userService: UserService, private router : Router,private itemService:ItemService) { 
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err=>{}
    );
  }

  ngOnInit(): void {
  }
  onSubmit(userName){
    if(this.post.post != '' && this.post.codename !=''){
      this.comment.postid = `${this.post.id}`
      this.post.timeDate = this.now;
      this.post.userName = userName;
      this.itemService.addItem(this.post);
      this.post.post = '';
      this.post.codename = '';
    }else{
      document.getElementById('errorCon').style.visibility = 'visible';
      document.getElementById('error').style.visibility = 'visible';

      setTimeout(() => document.getElementById('errorCon').style.visibility = 'hidden', 3000);
      setTimeout(() => document.getElementById('error').style.visibility = 'hidden', 3000);
    }
  }
}
