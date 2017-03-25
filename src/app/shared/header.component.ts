import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'header-block',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	ngOnInit(): void {
		$("button").on("click", function () {
			let menu = $(".navbar-collapse")
			let isCollapsed = menu.attr("aria-expanded");
			switch (isCollapsed) {
				case "true":
					$(".navbar-collapse").removeClass("slideShow");
					$(".navbar-collapse").addClass("slideUp"); break;
				case undefined:
				case "false":
					$(".navbar-collapse").removeClass("slideUp");
					$(".navbar-collapse").addClass("slideShow");break;
			}
		});

		$("<div>").html("x").addClass("menu-close").appendTo(".navbar-collapse");
		$("<div>").html("<p>7325 Lake Underhill Road 407-270-6505</p>").addClass("menu-address").appendTo(".navbar-collapse");
		$(".menu-close").click(function(){
			$(".navbar-toggle").trigger("click");
		});
	}
}