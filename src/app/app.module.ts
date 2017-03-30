import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FbWidgetComponent } from './fb-widget/fb-widget.component';
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from './menu/menu.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyB04QxZsKSPCwUVLoUJzIduX82MYbr8FOg",
  authDomain: "the-meatball-stoppe.firebaseapp.com",
  databaseURL: "https://the-meatball-stoppe.firebaseio.com",
  storageBucket: "the-meatball-stoppe.appspot.com",
  messagingSenderId: "380386201370"
};

//Layouts
import { MainComponent } from './layouts/main.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

//Shared 
import { HeaderComponent } from './shared/header.component';
import { HeroComponent } from './shared/hero.component';
import { ActionBarComponent } from './shared/action-bar.component';
import { SocailBarComponent } from './shared/social-bar.component';
import { OurMenuComponent } from './shared/our-menu.component';
import { TestimonialComponent } from './shared/testimonials.component';
import { MapComponent } from './shared/map.component';
import { OurPassionComponent } from './shared/our-passion.component';
import { FooterComponent } from './shared/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroSubPageComponent } from './shared/hero-sub-page.component';
import { CateringComponent } from './catering/catering.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    FbWidgetComponent,
    MainComponent,
    HeaderComponent,
    HeroComponent,
    ActionBarComponent,
    SocailBarComponent,
    OurMenuComponent,
    TestimonialComponent,
    MapComponent,
    OurPassionComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    MenuComponent,
    HeroSubPageComponent,
    CateringComponent,
    AboutUsComponent,
    MediaComponent
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
