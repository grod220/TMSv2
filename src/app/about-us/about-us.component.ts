import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  headlineImage: string = '/assets/images/aboutushero.jpg';

  ourPassionTitle: string;
  ourPassionDescription: string;
  ourPassionImg: string;
  constructor() {
    this.ourPassionDescription = "JIsabella Morgia di Vicari and Jeff Morgia,  Owners of Isabella’s Bella Cucina Catering,  developed the Community International Culinary Program for youth. Our mission is to feed families physically, emotionally, and spiritually…a focus on healthy families as well as healthy bodies. With busy schedules and the daily pressures of life, meal time is more important than ever.  It’s about giving kids hope, inspiration, and getting them back to the table.";
    this.ourPassionTitle = "Giving back";
    this.ourPassionImg = "assets/images/people.jpg";
  }
}
