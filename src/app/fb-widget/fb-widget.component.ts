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
  fbImageURL:string ;
  fbMessage:string;
  showAnimation: boolean = true;
  item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.item = af.database.object('/mostRecentFBPost', { preserveSnapshot: true });
    this.item.subscribe(snapshot => {
      this.fbURL = snapshot.val().url;
      this.fbImageURL = snapshot.val().imageURL;
      this.fbMessage = snapshot.val().message;
      this.showAnimation = false;
      setTimeout(function(){
        WindowRef.get().FB.XFBML.parse()
      }, 0)
    });
  }
  ngOnInit() {}
}
