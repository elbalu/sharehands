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
                xP = p.top + $(this).height() / 2 - 64, yP = p.left + $(this).width() / 2 - 32;
                var lImg = $("#loadInfo");
                $("#loadInfo #loadImg").show();
                $("#loadInfo #completeImg").hide();
                $(lImg).css({"top":xP, "left":yP, "position":"absolute","float":"none"}).show();
                setTimeout(function(){
                    $("#loadInfo #loadImg").hide();
                    $("#loadInfo #completeImg").show();
                    setTimeout(function(){
                        var px = $(pEl).position();
                        $(pEl).animate({"top": px.top + 50}, 100, function(){
                            $(pEl).animate({"top":-2000}, 100, function(){
                                $(pEl).hide();
                                $("#loadInfo").hide().css({"top":-200, "left":-200});
                            });
                        });
                    },500);
                }, 1000)
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
