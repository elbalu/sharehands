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

				  var mapInfo = JSON.parse($("#mapInfo").html());
				  var i, x = mapInfo.posts.dummyPosts;
				  for(i = 0; i < x.length; i+= 1){
					  var marker = new google.maps.Marker({
					      position: new google.maps.LatLng(parseFloat(x[i].location.replace(/,.*$/,"")),parseFloat(x[i].location.replace(/^.*,/,""))),
					      map: map, 
					      title: x[i].title
						  });
					  	attachMessage(marker, i, x[i].desc);
					}

					function attachMessage(marker, num, message){
						var infoWindow = new google.maps.InfoWindow({
				    		content: message
						});
					  	google.maps.event.addListener(marker, 'click', function () {
							infoWindow.open(marker.get('map'), marker);
						});
					}

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
