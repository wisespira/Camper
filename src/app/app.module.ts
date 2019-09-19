import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FirebaseModule, FirebaseProvider} from 'angular-firebase'
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmailPageComponent } from './email-page/email-page.component';
import { MapComponent } from './map/map.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ForumComponent,
    //data: { title: 'Heroes List' },
    pathMatch: 'full'
  },
  { path: 'contact',
    component: EmailPageComponent,
   // redirectTo: '/heroes',
    pathMatch: 'full'
  },
    {
    path: 'map',
    component: MapComponent,
    //data: { title: 'Heroes List' },
    pathMatch: 'full'
  },
 // { path: '**', component: AppComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    NavBarComponent,
    EmailPageComponent,
    MapComponent
    
  ],
  imports: [
      RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FirebaseModule,
    FormsModule,

  ],
  providers: [FirebaseProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
