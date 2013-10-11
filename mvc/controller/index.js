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
     
};
