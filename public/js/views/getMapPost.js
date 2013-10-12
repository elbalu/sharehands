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
				  var i, x = mapInfo;
				  for(i = 0; i < x.length; i+= 1){
					  var marker = new google.maps.Marker({
					      position: new google.maps.LatLng(x[i].latitude,x[i].longitude),
					      map: map, 
					      title: x[i].title,
					      icon: x[i].type == "have" ? "/img/haveMarker.png" : "/img/wantMarker.png",
					      desc: x[i].desc,
					      email: x[i].email,
					      recType: x[i].type
						  });
					  	attachMessage(marker, i, x[i].desc, x[i]._id);
					}

					function attachMessage(marker, num, message, id){
						var infoWindow = new google.maps.InfoWindow({
				    		//content: "<a data-toggle='modal' href='/getPost/"+ id +"'>" + message + "</a>"
				    		content: "<a data-toggle='modal' href='#myModal'>" + message + "</a>"
						});
					  	google.maps.event.addListener(marker, 'click', function () {
					  		$("#modalTitle").html(marker.title);
					  		$("#modalBody").html("<p><strong>Detailed Information: </strong>"+marker.desc+"</p><p><strong>Email Address: </strong>"+marker.email+"</p>");
					  		$("#modalButton").html(marker.recType == "have" ? "This will help me" : "I will help");
							infoWindow.open(marker.get('map'), marker);
						});
					}

				  	console.log(position.coords.latitude+1);

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
