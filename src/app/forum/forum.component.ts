import { Component, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from '../firebase-database.service'
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  name = '';
  posts:any;
  constructor(private FDS: FirebaseDatabaseService) {
  
  }

  ngOnInit() { 
      this.posts = this.FDS.posts;
      this.FDS.getPosts().then((res)=>{
         this.posts = res;
      });
  }
  getPosts(){
      this.FDS.getPosts().then((res)=>{
         this.posts = res;
      });
  }
  
  createTime(d:Date){
      if (d.getHours()<10){
          if (d.getMinutes()<10){
              return "0" + d.getHours() + ":0" + d.getMinutes();
          }else{
              return "0" + d.getHours() + ":" + d.getMinutes();
          } 
      }else{
          if (d.getMinutes()<10){
             return  d.getHours() + ":0" + d.getMinutes(); 
          }else{
             return  d.getHours() + ":" + d.getMinutes(); 
          }
      }
  }
  
  addTopic(){
      this.FDS.addPost(this.name, this.createTime(new Date()));
      this.getPosts();
  }

}
