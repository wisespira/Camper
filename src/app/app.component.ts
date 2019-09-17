import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'campWeb';
  constructor() {
    const config = {
  apiKey: "AIzaSyALs2ufdbc6UzcT7Ey8yvWOE6dmy_R1vRU",
  authDomain: "campingweb-b4604.firebaseapp.com",
  databaseURL: "https://campingweb-b4604.firebaseio.com",
  projectId: "campingweb-b4604",
  storageBucket: "",
  messagingSenderId: "410614115690",
  appId: "1:410614115690:web:c6cc901e7eb0e4e5964913"
    };
    firebase.initializeApp(config);
  }
  
  
  
  
  
  
}
