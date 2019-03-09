var express = require('express');
var app = express();
var db = require('./db');


app.get('/', function(req, res){

    res.render('info', {
        
    });
});

app.post('/', function(req, res){
var bio = req.body.bio;
job = req.body.job;
passions = req.body.passions;
hobbies = req.body.hobbies;
skills = req.body.skills;
Communication = req.body.Communication;

Delegation = req.body.Delegation;

Responsibility = req.body.Responsibility;

Relationshipb = req.body.Relationshipb;

Conflictman = req.body.Conflictman;

Criticalt = req.body.Criticalt;

Creativity = req.body.Creativity;

Negotiating = req.body.Negotiating;

db.query("INSERT INTO `user` (bio, username, passions, hobby, proffesion, skills, communication, criticalt, responsibility) VALUES ('"+bio+"', 'sam38', '"+passions+"', '"+hobbies+"','"+job+"', '"+skills+"', '"+Communication+"', '"+Criticalt+"', '"+Responsibility+"')");





});
module.exports = app;