import { Injectable } from '@angular/core';
import {FirebaseProvider} from 'angular-firebase';
//https://www.npmjs.com/package/angular-firebase
@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {

  constructor(private fb: FirebaseProvider) { }
  
  addPost(){
      console.log('yo2');
      this.fb.pushData('ira', 'bob').then((res) => {console.log(res)})
      .catch((err) => {console.log(err)}) 
  }
  
  getPosts(){
      
  }
  
}
