define([
	'jquery', 
	'underscore', 
	'backbone',
	], 
	function($, _, Backbone){
	
		var RegisterView = Backbone.View.extend({
		
			el: 'body',
		    
		    lonlat: "37.3768774,-121.9213164",
		
			events: {
			    "keypress input#orgName": "listOrgs"
			},
			
			initialize: function(json) {
			    console.log('init register');
			    //this.getLocation();
			},
			
			render: function(json) {
			},

		    listOrgs: function(e) {
			var el = e.target, val = null;
			val = $.trim($(el).val());
			console.log("list orgs called");
			if(val.length > 3) {
			    this.getGoogleData(val);
			}
		    },

		    getGoogleData: function(q) {
			var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?radius=500&sensor=true&types=school,university,establishment&key=AIzaSyD_Klqi6urvtIlL2YIJMKg55gWqUCdKp5o";
			$.getJSON(url+"&location="+this.lonlat+"&query="+q, function(data){
			    console.log(data);
			})
			.done(function(){console.log("second success")})
			.fail(function(){console.log("fail")});
		    },

		    getLocation: function() {
			 if (navigator.geolocation) {
			     navigator.geolocation.getCurrentPosition(this.setLocation, this.setLocationOnErr);
			 }
		    },

		    setLocation: function(pos) {
			this.lonlat = pos.coords.latitude + "," + pos.coords.longitude;
		    },

		    setLocationOnErr: function(err) {
			this.lonlat = "37.3768774,-121.9213164";
		    }

		});
		
		return RegisterView;
	
	}
);
