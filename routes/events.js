var express = require('express');
var app = express();
var db = require('./db');


app.get('/', function(req, res){

    res.render('events', {
        
    });
});


app.post('/', function(req, res){
    var skill;
    if (req.body.communication){
        console.log("Communication event");
        skill = "Communication";
    }
    
    if (req.body.responsibilty){
        console.log("Communication event");
        skill = "Responsibilty";
    }
    
    if (req.body.Criticalt){
        console.log("Communication event");
        skill = "criticalt";
    }

db.query("SELECT * FROM `activities` WHERE skill = '"+skill+"'", function(request, responce){
    if(responce[0] != undefined){
        console.log(responce[0]);
    }
    res.render('events', {
        event: responce
    });
});


});
module.exports = app;