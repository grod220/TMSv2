import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FbWidgetComponent } from './fb-widget/fb-widget.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: process.env.FIREAPIKEY,
  authDomain: "the-meatball-stoppe.firebaseapp.com",
  databaseURL: "https://the-meatball-stoppe.firebaseio.com",
  storageBucket: "the-meatball-stoppe.appspot.com",
  messagingSenderId: process.env.FIREMESSAGESENDER
};

@NgModule({
  declarations: [
    AppComponent,
    FbWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
