import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sub-page-container',
  templateUrl: './sub-page-container.component.html',
  styleUrls: ['./sub-page-container.component.css']
})
export class SubPageContainerComponent implements OnInit {

  constructor() { }

  @Input() topic: string;

  ngOnInit() {
  }

}
