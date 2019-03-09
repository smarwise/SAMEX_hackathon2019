var express = require('express');
var app = express();


app.get('/', function(req, res){

    res.render('homepage', {

    });
});

module.exports = app;