var express = require('express');
var app = express();
var db = require('./db');
var session = require('express-session');

app.get('/', function(req, res){
    res.render('profile', {

    });
});

app.post('/', function(req, res){

    db.query("SELECT * FROM `user` WHERE username = '"+req.body.user+"'", function(re, resa){
        if (resa[0] != undefined){
            console.log("got some values");
        }
        res.render('profile', {
            activities: resa[0]
        });
    });
});

module.exports = app;