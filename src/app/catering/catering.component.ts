import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {
  headlineImage: string = '/assets/images/cateringhero.jpg';
  constructor() { }

  ngOnInit() {
  }

}
