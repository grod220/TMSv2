import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'header-block',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	adress: string = "7325 Lake Underhill Road 407-270-6505";
	ngOnInit(): void {
		
		this.toggleClickHandler();
		this.appendAdditionalHTML();
			
		$(".menu-close").click(this.triggerMenuClick);
		$(".navbar-collapse li a").click(this.triggerMenuClick);
		
	}

	private toggleClickHandler() {
		$("button").on("click", function () {
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

	private appendAdditionalHTML (){
		$("<div>").html("x").addClass("menu-close").appendTo(".navbar-collapse");
		$("<div>").html(`<p>${this.adress}</p>`).addClass("menu-address").appendTo(".navbar-collapse");
	}

	private triggerMenuClick(){
		var screenWidth = window.innerWidth;
		if(screenWidth <= 767) {
			$(".navbar-toggle").trigger("click");
		}
		
	}
}