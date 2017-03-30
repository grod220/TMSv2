import { Component, Input  } from '@angular/core';
      
@Component({
	moduleId: module.id,
	selector: 'action-bar-block',
	templateUrl: './action-bar.component.html',
	styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent  {
	
	 @Input() isHomePage: boolean = true;
	 @Input() heading: string ;
	
}