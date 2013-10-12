define([
        'jquery',
        'underscore',
        'backbone',
        'bootstrap',
        'views/register'
], function ($, _, Backbone, Bootstrap) {

    var AppView = Backbone.View.extend({

        el: $("#wrap"),
        events: {
           
        },

        initialize: function () {
           
           
            console.log('init appjs');
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
