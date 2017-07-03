import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
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

  constructor(db: AngularFireDatabase) {
    this.item = db.object('/mostRecentFBPost', { preserveSnapshot: true });
    this.item.subscribe(snapshot => {
      this.fbURL = snapshot.val().url;
      this.fbImageURL = snapshot.val().imageURL;
      this.fbMessage = snapshot.val().message;
      let self = this;
      setTimeout(function(){
        WindowRef.get().FB.XFBML.parse();
        self.showAnimation = false;
      }, 0)
    });
  }
  ngOnInit() {}
}
