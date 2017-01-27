import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FbWidgetComponent } from './fb-widget/fb-widget.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyB04QxZsKSPCwUVLoUJzIduX82MYbr8FOg",
  authDomain: "the-meatball-stoppe.firebaseapp.com",
  databaseURL: "https://the-meatball-stoppe.firebaseio.com",
  storageBucket: "the-meatball-stoppe.appspot.com",
  messagingSenderId: "380386201370"
};

//Layouts
import { MainComponent }          from './layouts/main.component';

// Routing Module
import { AppRoutingModule }             from './app.routing';

//Shared 

import { FooterComponent } from './shared/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FbWidgetComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
