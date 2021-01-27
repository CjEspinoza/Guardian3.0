import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CommentsItem, Item, Likes } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ItemService } from '../_services/item.service';


export interface UserDetails {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  exp: number
  iat: number
  college: string
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  userDetails;
  likes: Likes[];
  comments: CommentsItem[];
  posts: Item[];
  search;
  firstName: string;
  commentsV:boolean = false;
  editState:boolean = false;
  commentState:boolean = false;
  itemToEdit: Item;
  itemToLike: Item;
  commentsToShow: Item;
  commentToEdit: CommentsItem;
  cTimeDate =  Date();
  clicked:boolean = false;
  post: Item = {
    id:'',
    post: '',
    ups:0,
    downs:0,
    commentid:'',
    userName:'',
    timeDate:''
  }
  comment: CommentsItem = {
    id:'',
    comment:'',
    commentcodename:'',
    postid:'',
    ctimeDate:''
  }
  like: Likes = {
    id:'',
    postID: '',
    userEmail: '',
    addCount:0
  }
  constructor(private userService: UserService,private itemService: ItemService,private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(posts =>{
      this.posts = posts;
    })
    this.itemService.getCommentItems().subscribe(comments=>{
      this.comments = comments;
    })
    this.itemService.getLikes().subscribe(likes => {
      this.likes = likes;
    })
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err=>{}
    );
  }
  deleteItem(event, post: Item){
    this.clearState();
    this.itemService.deleteItem(post);
  }
  editItem(event, post: Item){
    this.editState = true;
    this.itemToEdit = post;
  }
  updateItem(post: Item){
    this.itemService.updateItem(post);
    this.clearState();
  }
  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
  
 
  //comment section
  onSubmit(id,name){
    if(this.comment.comment != ''){
      this.comment.ctimeDate = this.cTimeDate;
      this.comment.commentcodename = name;
      this.comment.postid = id;
      this.itemService.addComment(this.comment);
      this.comment.comment = '';
      this.comment.commentcodename = '';
    }
  }
  deleteComment(event, comment: CommentsItem){
    this.itemService.deleteComm(comment);
  }
  //Reacts
  ups(post: Item, userEmail){
    if(this.likes.find(x => x.id == `${this.userDetails.email}_${post.id}`)){
      document.getElementById('hiddenT').style.visibility = "visible";
      setTimeout(() => document.getElementById('hiddenT').style.visibility = "hidden",2000);
      document.getElementById('toastCon').style.visibility = "visible";
      setTimeout(() => document.getElementById('toastCon').style.visibility = "hidden",2000);
    }else{
    this.like.addCount = 1;
    post.ups += this.like.addCount;
    this.like.postID = post.id;
    this.like.userEmail = userEmail;
    this.like.id = `${userEmail}_${post.id}`;
    this.itemService.updateItem(post);
    this.itemService.setLikes(this.like.id, this.like.userEmail, this.like.postID,this.like.addCount);
    }
}
  showComments(event, post: Item){
      this.commentsV = true;
      this.commentsToShow = post;
  }
  hideComments(){
    this.commentsV = false;
  }
}
