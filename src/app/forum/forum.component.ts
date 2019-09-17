import { Component, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from '../firebase-database.service'
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private FDS: FirebaseDatabaseService) { }

  ngOnInit() {
  }
  addTopic(){
      this.FDS.addPost()
    
  }

}
