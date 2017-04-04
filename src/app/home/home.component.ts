import { Component } from '@angular/core';
@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  ourPassionTitle: string;
  ourPassionDescription: string;
  ourPassionImg: string;
  constructor() {
    this.ourPassionDescription = "Jeff and Isabella Morgia created The Meatball Stoppe concept with the desire to share their passion for family traditions, uniqueness, freshness all in a non-traditional Italian style. The Meatball Stoppe has been Awarded the 'Best of the Best Meatballs' in Central Florida for 2016 and is a top 10 rated Orlando restaurant.";
    this.ourPassionTitle = "Our Passion";
    this.ourPassionImg = "assets/images/our_passion.jpg";
  }
}
