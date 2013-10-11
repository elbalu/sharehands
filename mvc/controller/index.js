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
        req.model = {
        viewName: 'contact',
        master: 'public/templates/master',
        data: {
            title: 'contact page'
        }

    };
     res.render(req.model.master, req.model);

    });
     server.get('/about', function (req, res) {
        var model = {viewName: 'about'};
        res.render('about', model);
    });
    
    server.get('/landing', function (req, res) {
        var model = {viewName: 'landing'};
        res.json('landing', model);
    });


    server.get('/getPost', function(req, res) {
        var model = {id:req.params.id, name: "Send all the list of adds in the region", description: "Send the all add post", status: 'sucess', viewName: 'sucess'};
        res.json('sucess', model);
    });

    server.get('/getPost/:id', function(req, res) {
        var model = {id:req.params.id, name: "Get the post", description: "Send the particular add post", status: 'sucess', viewName: 'sucess'};
        res.json('sucess', model);
    });

    server.get('/map/:id', function(req, res) {
        var model = {id:req.params.id, name: "The Name", description: "description"};
        res.json('map', model);
    });

};
