var express = require('express');
var app = express();
var session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function(req, res){
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
                
        res.render('userprofile', {
            activities : responce[0],
            stuff: "stuff"
        });
        }
    
    });
  ;
});



module.exports = app;