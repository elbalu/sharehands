define([
        'jquery',
        'underscore',
        'backbone',
        'bootstrap',
        'views/register',
        'views/geolocation'
], function ($, _, Backbone, Bootstrap) {

    var AppView = Backbone.View.extend({

        el: $("#wrap"),
        events: {
           "click button.listButton": "processListItem"
        },

        initialize: function () {
           
           
            console.log('init appjs');
        },

        render: function () {

        },

        processListItem: function (e) {
            var el = e.target,
            pEl = $(el).closest(".listBox");
            $(pEl).fadeTo(100, 0.35, function(){
                var p = $(this).position(),
                xP = p.top + $(this).height(), yP = p.left + $(this).width();

                $("#loadInfo").position({top: xP, left:yP}).show();
            });
        },
       
        proceedInnerLink: function (e) {
            $.get(e.target.href, function (json) {
                require(['views/' + json.viewName], function (View) {
                    var pageView = new View(json);
                    dust.render(json.viewName, json, function (err, out) {
                        $('#innerContent').html(out);
                    });
                    pageView.render(json);
                });
            });

            e.preventDefault();
        }


    });

    return AppView;

});
