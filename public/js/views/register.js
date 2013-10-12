define([
	'jquery', 
	'underscore', 
	'backbone',
	'select2'
	], 
	function($, _, Backbone, select2){
	
		var RegisterView = Backbone.View.extend({
		
			el: 'body',
		    
		    lonlat: "37.3768774,-121.9213164",
		
			events: {
			    "keypress input#orgName": "listOrgs"
			},
			
			initialize: function(json) {
			    console.log('init register');
			    //this.googleLoadScript();
			    //this.getLocation();

/*		    	$("input#orgName").select2({
					placeholder: "Enter org name",
					minimumInputLength: 4,
	                ajax: { // instead of writing the function to execute the request we use Select2's convenient helper
	                    url: "https://maps.googleapis.com/maps/api/place/textsearch/json?radius=500&types=school&key=AIzaSyD_Klqi6urvtIlL2YIJMKg55gWqUCdKp5o&sensor=true&query=school&location=37.3768774,-121.9213164",
	                    dataType: 'jsonp',
	                    data: function (term, page) {
	                    	console.log("ajax called");
	                        return {
								name:"sharemeknowledge",
								client_id:"939651214539.apps.googleusercontent.com",
								client_secret:"oUFqjL5UwJVUrwKOW6yJqpnH",
	                            query: term, // search term
	                            limit: 50,
	                        };
	                    },
	                    results: function (data, page) { // parse the results into the format expected by Select2.
	                    	console.log("result called");
	                        data = data.response.groups[0].items;
	                        var more = (page * 10) < data.total; // whether or not there are more results available
	                        // notice we return the value of more so Select2 knows if more results can be loaded
	                        return {
	                            results: data.results.name,
	                            more: more
	                        };
	                    }
	                }
	                //formatResult: venuesFormatResult, // omitted for brevity, see the source of this page
	                //formatSelection: venuesFormatSelection, // omitted for brevity, see the source of this page
	                //dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
	                //escapeMarkup: function (m) {
	                    //return m;
	                //} // we do not want to escape markup since we are displaying html in results

		    	});*/

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
		    },

            venuesFormatResult: function(data) {
                var markup = "<table class='venues-result'><tr>";
                //console.log(data);
                if (data.name !== undefined && data.name !== undefined) {
                    markup += "<td class='place-icon'><img src='" + data.categories[0].icon + "'/></td><td class='place-name'>" + data.name + "<p>" + data.location.city + " , " + data.location.state + " , " + data.location.country + "</p></td>";
                }

                markup += "</td></tr></table>"
                return markup;
            },

            googleLoadScript: function(){
            	var script = document.createElement('script');
            	script.type = 'text/javascript';
            	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=googleInitialize';
            	document.body.appendChild(script);
            },

            googleInitialize: function(){
            	  var pyrmont = new google.maps.LatLng(37.3768774,-121.9213164);

  					map = new google.maps.Map(document.getElementById('map'), {
      				mapTypeId: google.maps.MapTypeId.ROADMAP,
      				center: pyrmont,
      				zoom: 15
    				});

  					var request = {
    					location: pyrmont,
    					radius: '500',
    					types: ['school']
  					};

  				service = new google.maps.places.PlacesService(map);
  				service.nearbySearch(request, gCallback);
            },

            gCallbakc: function(){
            	if (status == google.maps.places.PlacesServiceStatus.OK) {
            		for (var i = 0; i < results.length; i++) {
            			var place = results[i];
            			console.log(results[i]);
            		}
            	}
            },
            venuesFormatSelection: function(data) {
                
                workingData = {
                    guid: data.id,
                    group_name:data.name,
                    location: data.location,
                    group_owner_id:$('#userFBId').val()
                }
                return data.name;
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
