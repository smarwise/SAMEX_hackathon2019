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
            skills = [];
            var comm;
            var resp;
            var crit;
                if (responce[0].Communication){
                    skills.push("Communication");
                }
                if (responce[0].Responsibility){
                    skills.push("Responsibility");
                }
                if (responce[0].Criticalt){
                    skills.push("Criticalt");
                }
            
                console.log(skills);
                for (var i = 0; i < skills; i++){
                    conssole.log(skills[i]);
                }
                
        res.render('activities', {
            activities : responce[0],
            stuff: "stuff"
        });
        }
    
    });
  
 
});




module.exports = app;