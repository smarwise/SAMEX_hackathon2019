var express = require('express');
var app = express();



app.get('/', function(req, res){

    res.render('info', {
        
    });
});

app.post('/', function(req, res){
bio = console.log(req.body.bio);
job = console.log(req.body.job);
passions = console.log(req.body.passions);
hobbies = console.log(req.body.hobbies);
skills = console.log(req.body.skills);
Communication = console.log(req.body.Communication);
Delegation = console.log(req.body.Delegation);
Responsibility = console.log(req.body.Responsibility);
Relationshipb = console.log(req.body.Relationshipb);
Conflictman = console.log(req.body.Conflictman);
Criticalt = console.log(req.body.Criticalt);
Creativity = console.log(req.body.Creativity);
Negotiating = console.log(req.body.Negotiating);





});
module.exports = app;