define([
	'jquery', 
	'underscore', 
	'backbone'
	], 
	function($, _, Backbone){
	
		var mapPostView = Backbone.View.extend({

			count: 0,
		
			el: '#mapPost',
		
			events: {
				'mouseover' : 'geoLoc'
			},
			
			initialize: function(json) {

			},
			
			render: function() {
				console.log('geo');
			},
			geoLoc: function(){
				if(this.count==0){
					console.log('div load');
					if (navigator.geolocation) {
					  navigator.geolocation.getCurrentPosition(this.success, this.error);
					} else {
					  error('not supported');
					}
					this.count++;
				}
			},
			success: function(position){
				var s = document.querySelector('#status');
  
				  if (s.className == 'success') {
				    // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
				    return;
				  }
				  
				  s.innerHTML = "found you!";
				  s.className = 'success';
				  
				  var mapcanvas = document.createElement('div');
				  mapcanvas.id = 'mapcanvas';
				  mapcanvas.style.height = '400px';
				  mapcanvas.style.width = '560px';
				    
				  document.querySelector('article').appendChild(mapcanvas);
				  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				  var latlng1 = new google.maps.LatLng(position.coords.latitude+0.01, position.coords.longitude+0.01);

				  var myOptions = {
				    zoom: 12,
				    center: latlng,
				    mapTypeControl: false,
				    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
				    mapTypeId: google.maps.MapTypeId.ROADMAP
				  };
				  var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
				  console.log(position.coords.latitude+1);
				  var infoWindow = new google.maps.InfoWindow({
				    content: 'Content goes here..'
				});

				  var marker = new google.maps.Marker({
				      position: latlng, 
				      map: map, 
				      infoWindow: infoWindow,
				      title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
				  });
				  //infoWindow.open(map, marker);
				  
				  var marker1 = new google.maps.Marker({
				      position: latlng1, 
				      map: map, 
				      title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
				  });
				  google.maps.event.addListener(marker, 'click', function () {
					// where I have added .html to the marker object.
					infoWindow.open(map, marker);
					});
			},
			error: function(msg){
				var s = document.querySelector('#status');
				  s.innerHTML = typeof msg == 'string' ? msg : "failed";
				  s.className = 'fail';
							}
		
		});
		
		return mapPostView;
	
	}
);
