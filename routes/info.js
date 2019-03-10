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

    res.render('info', {
        
    });
});

app.post('/', function(req, res){

 bio = req.body.bio;
job = req.body.job;
passions = req.body.passions;
hobbies = req.body.hobbies;
skills = req.body.skills;
Communication = req.body.Communication;
Responsibility = req.body.Responsibility;
Criticalt = req.body.Criticalt;
PCommunication = req.body.PCommunication;
PResponsibility = req.body.PResponsibility;
PCriticalt = req.body.PCriticalt;


    db.query("UPDATE user SET bio = '"+bio+"', passions = '"+passions+"',Communication = '"+Communication+"', Criticalt = '"+Criticalt+"', Responsibility = '"+Responsibility+"', pCommunication = '"+PCommunication+"', pResponsibility = '"+PResponsibility+"', pCriticalt = '"+PCriticalt+"' WHERE `username` = '"+sesh.user+"'");









});
module.exports = app;