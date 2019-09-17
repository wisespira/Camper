import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FirebaseModule, FirebaseProvider} from 'angular-firebase'
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule
  ],
  providers: [FirebaseProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
