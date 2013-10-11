//var Person = require('../model/personModel');

module.exports = function (server) {
    'use strict';


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

    server.get('/register', function (req, res) {
        req.model = {
            viewName: 'register/register',
            master: 'public/templates/master',
            data: {
                title: 'Register'
            }
        };
        res.render(req.model.master, req.model);
    });

    server.get('/register/:id', function (req, res) {
        req.model = {
            viewName: 'register/'+req.params.id,
            master: 'public/templates/master',
            data: {
                title: 'Register'
            }
        };
        res.render(req.model.master, req.model);
    });
     
};
