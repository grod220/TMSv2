import { Component } from '@angular/core';

function generateRandomHero(num) {
  return Math.ceil(Math.random() * num);
}

@Component({
	moduleId: module.id,
	selector: 'hero-block',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css']
})
export class HeroComponent  {
  heroImageURL: string;

  constructor(){
    this.heroImageURL = '../../assets/images/hero'
                        + generateRandomHero(7)
                        + '.jpg';
  }
}
