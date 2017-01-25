import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-widget',
  templateUrl: './fb-widget.component.html',
  styleUrls: ['./fb-widget.component.css']
})
export class FbWidgetComponent implements OnInit {
  FBLink = "https://www.facebook.com/meatballstoppe/videos/1290165771005316/"

  constructor() { }

  ngOnInit() {
  }

}
