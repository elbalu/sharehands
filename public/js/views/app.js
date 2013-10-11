define([
        'jquery',
        'underscore',
        'backbone',
        'bootstrap',
        'dust',
        'dustHelper'
], function ($, _, Backbone, Bootstrap, Dust) {

    var AppView = Backbone.View.extend({

        el: $("#wrapper"),
        events: {
           
        },

        initialize: function () {
           
           

        },

        render: function () {

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