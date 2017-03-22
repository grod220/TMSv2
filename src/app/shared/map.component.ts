import { Component, OnInit } from '@angular/core';
declare var google;

@Component({
	moduleId: module.id,
	selector: 'map-block',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	ngOnInit(): void {
		this.initMap();
	}

	initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 16,
			center: { lat: 28.5394327, lng: -81.2868005 },
			scrollwheel:  false
		});
		var styles = [
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#bdbdbd"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels.icon",
				"stylers": [
					{
						"saturation": 45
					},
					{
						"lightness": 55
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dadada"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
					}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c9c9c9"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			}
		]

		map.setOptions({ styles: styles });

		var image = 'assets/images/point.png';
		var beachMarker = new google.maps.Marker({
			position: { lat: 28.5394327, lng: -81.2868005 },
			map: map,
			icon: image
		});
	}

}