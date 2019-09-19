import { Injectable } from '@angular/core';
import {FirebaseProvider} from 'angular-firebase';
//https://www.npmjs.com/package/angular-firebase
@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {
  posts:any;
  constructor(private fb: FirebaseProvider) {
      this.getPosts().then((res)=>{
          this.posts = res;
      })
    }
  
  addPost(name,time){
      this.fb.pushData('posts', {name:name, threads:0, post:0, active:time}).then((res) => {})
      .catch((err) => {console.log(err)}) 
  }
  
   getPosts(){
    return this.fb.getDataArr('posts','value',{});
  }
  
}
