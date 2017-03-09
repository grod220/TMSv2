import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { WindowRef } from './windowRef';

@Component({
  selector: 'app-fb-widget',
  templateUrl: './fb-widget.component.html',
  styleUrls: ['./fb-widget.component.css']
})
export class FbWidgetComponent implements OnInit {
  fbURL:string;
  fbImageURL:string = "https://scontent.xx.fbcdn.net/v/t1.0-9/17155219_1351938081494751_5330889908933435845_n.jpg?oh=a57d41a0939478938712ac54e940482f&oe=5936D16D";
  fbMessage:string;

  item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.item = af.database.object('/mostRecentFBPost', { preserveSnapshot: true });
    this.item.subscribe(snapshot => {
      this.fbURL = snapshot.val().url;
      this.fbImageURL = snapshot.val().imageURL;
      this.fbMessage = snapshot.val().message;
      setTimeout(function(){
        WindowRef.get().FB.XFBML.parse()
      }, 0)
    });
  }
  ngOnInit() {}
}
