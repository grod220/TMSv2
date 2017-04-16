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

		setTimeout(() => {
			this.toggleClickHandler();
			this.appendAdditionalHTML();

			$("document .menu-close").click(this.triggerMenuClick);
		});
	}

	private toggleClickHandler() {
		// Use for menu close button
		$("a.navbar-toggle").on("btnclick", function () {
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
		});
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
		}else {
			event.stopPropagation();
		}
		 

	}

	private appendAdditionalHTML() {
		$("<div>").html("x").addClass("menu-close").appendTo(".navbar-collapse");
		$("<div>").html(`<p>${this.adress}</p>`).addClass("menu-address").appendTo(".navbar-collapse");
	}

	triggerMenuClick() {
		var screenWidth = window.innerWidth;
		if (screenWidth <= 767) {
			$(".navbar-toggle").triggerHandler("btnclick");
		}

	}
}