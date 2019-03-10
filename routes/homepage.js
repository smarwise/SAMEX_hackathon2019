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
    db.query("SELECT * FROM `merits` WHERE username = '"+sesh.user+"'", function(error, re, fields)
    {
        if (error)
            throw error;
        if (re == 0)
        {
            db.query("INSERT INTO `merits` (username, events, points, comm, resp, crit) VALUES ( '"+sesh.user+"', 0, 0, 0, 0, 0)");
        }
    });
    res.render('homepage', {
        nlog:"j"
    });
});

module.exports = app;