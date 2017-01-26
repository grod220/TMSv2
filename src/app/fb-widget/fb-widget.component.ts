import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { WindowRef } from './windowRef';

@Component({
  selector: 'app-fb-widget',
  templateUrl: './fb-widget.component.html',
  styleUrls: ['./fb-widget.component.css']
})
export class FbWidgetComponent implements OnInit {
  FBLink:string;

  item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.item = af.database.object('/mostRecentFBPost', { preserveSnapshot: true });
    this.item.subscribe(snapshot => {
      this.FBLink = snapshot.val().url
      setTimeout(function(){
        WindowRef.get().FB.XFBML.parse()
      }, 0)
    });
  }
  ngOnInit() {}
}
