import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'our-passion-block',
	templateUrl: './our-passion.component.html',
	styleUrls: ['./our-passion.component.css']
})
export class OurPassionComponent {

	@Input() title: string;
	@Input() description: string;
	@Input() imagePath: string;

}