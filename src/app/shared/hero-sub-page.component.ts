import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-sub-page',
  templateUrl: './hero-sub-page.component.html',
  styleUrls: ['./hero-sub-page.component.css']
})
export class HeroSubPageComponent implements OnInit {

  constructor() { }

  @Input() subPageImage: string;

  ngOnInit() {
  }

}
