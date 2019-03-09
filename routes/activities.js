var express = require('express');
var app = express();
var db = require('./db');
var session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function(req, res){
    sesh = req.session;
    sesh.user = "user";
    console.log(sesh.user);
    db.query("SELECT * FROM `user` WHERE username = '"+sesh.user+"'", function(request, responce){
        if (responce[0] != undefined){
                            
        res.render('activities', {
            activities : responce[0],
            stuff: "stuff"
        });
        }
    
    }); 
});




module.exports = app;