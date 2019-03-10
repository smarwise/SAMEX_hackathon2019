var express = require('express');
var app = express();
var db = require("./db");
var session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function(req, res){
    db.query("SELECT * FROM `user` WHERE username = '"+sesh.user+"'", function(request, responce){
        if (responce[0] != undefined){
            console.log(responce[0]);
        }
        res.render('mentor', {
            skills:responce[0]
     
         });
    });


});


module.exports = app;