//var Person = require('../model/personModel');

module.exports = function (server) {
    'use strict';

    /**
     * The default route for this application: /
     * @param {Object} req the HTTP request object
     * @param {Object} res the HTTP response object
     */
    // server.get('/', function (req, res) {
    //     var model = {
    //             viewName: "hello",
    //             baseTemplate: 'master',
    //             data: {
    //                 title: 'hello Sai'
    //             }
    //         };
    //         res.render("public/templates/" + model.baseTemplate, model);
    // });

    server.get('/', function (req, res) {


    req.model = {
        viewName: 'index',
        master: 'public/templates/master',
        data: {
            title: 'home page'
        }

    };

    res.render(req.model.master, req.model);

});

    server.get('/contact', function (req, res) {
        var model = {viewName: 'contact'};
        res.render('contact', model);
    });
     server.get('/about', function (req, res) {
        var model = {viewName: 'about'};
        res.render('about', model);
    });
     server.get('/landing', function (req, res) {
        var model = {viewName: 'landing'};
        res.json('landing', model);
    });
};
