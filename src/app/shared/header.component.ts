import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'header-block',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

	adress: string = "7325 Lake Underhill Road 407-270-6505";
	ngAfterViewInit(): void {
		
	}

	onClick(event) {
		// workaround for IOS click issue 
		var screenWidth = window.innerWidth;
		if (screenWidth <= 767) {
			let menu = $(".navbar-collapse")
			let isCollapsed = menu.attr("aria-expanded");
			switch (isCollapsed) {
				case "true":
					$(".navbar-collapse").removeClass("slideShow");
					$(".navbar-collapse").addClass("slideUp");
					$(".eclipse").remove(); break;
				case undefined:
				case "false":
					$(".navbar-collapse").removeClass("slideUp");
					$(".navbar-collapse").addClass("slideShow");
					$("<div>").addClass("eclipse").appendTo("html"); break;
			}
		} else {
			event.stopPropagation();

		}
	}
}