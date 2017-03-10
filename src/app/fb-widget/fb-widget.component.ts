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
  fbImageURL:string = "https://scontent.xx.fbcdn.net/v/t1.0-9/17103339_1354465297908696_2042452126678539110_n.jpg?oh=a532c9c4996eef69e471170a7e13424c&oe=5964BDEA";
  fbMessage:string;

  item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.item = af.database.object('/mostRecentFBPost', { preserveSnapshot: true });
    this.item.subscribe(snapshot => {
      this.fbURL = snapshot.val().url;
      // FIX SIZING LATER
      // this.fbImageURL = snapshot.val().imageURL;
      this.fbMessage = snapshot.val().message;
      setTimeout(function(){
        WindowRef.get().FB.XFBML.parse()
      }, 0)
    });
  }
  ngOnInit() {}
}
