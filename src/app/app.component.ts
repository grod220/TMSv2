import { Component } from '@angular/core';
import { FbWidgetComponent } from './fb-widget/fb-widget.component';

@Component({
  selector: 'app-root',
   template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'app works!';
}
