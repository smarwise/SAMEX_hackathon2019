var express = require('express');
var app = express();

app.get('/', function(req, res){
res.render('userprofile', {
    name: "User"
    
});
});

app.post('/', function(req, res){
stuff1 = req.body.stuff;
console.log(stuff1);

});

module.exports = app;