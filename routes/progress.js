var express = require('express');
var app = express();
const db = require('./db');
var session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function(req, res){
    var skills = [];
    var percent = [];
    db.query("SELECT * FROM `user` WHERE username = '"+sesh.user+"'", function(error, results, fields)
    {
        if (error)
            throw error;
        if ( results[0].Communication != 'undefined')
        {
            skills.push('Communication')
        }
        if (results[0].Responsibility != 'undefined')
        {
            skills.push('Responsibility')
        }
        if (results[0].Criticalt != 'undefined')
        {
            skills.push('Critical Thinking')
        }
        db.query("SELECT * FROM `merits` WHERE username = '"+sesh.user+"'", function(error, results, fields)
        {
            if (error)
                throw error;
            percent.push(results[0].comm)
            percent.push(results[0].resp)
            percent.push(results[0].crit)
    
    db.query("SELECT * FROM `merits` WHERE username = '"+sesh.user+"'", function(error, re, fields)
    {
        if (error)
            throw error;
        if (re <= 0)
        {
            var crit = 0;
            var comm = 0;
            var resp = 0;
            var events = 0;
            var points = 0;
        }
        else
        {
            var crit = re[0].crit;
            var comm = re[0].comm;
            var resp = re[0].resp;
            var points = re[0].points;
            var events = re[0].events;
        }
        console.log(percent)
                res.render('progress', {
                skills: skills,
                events: events,
                resp: resp,
                comm: comm,
                points: points,
                crit: crit,
                percent: percent
                });
        });
    });
});
});

module.exports = app;