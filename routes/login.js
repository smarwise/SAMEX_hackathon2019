var express = require('express');
var app = express();
var session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.get('/', function(req, res){
    res.render('login', {
        nlog:"j"
    });
});

app.post('/', function(req, res){
    sesh = req.session;
    sesh.user = req.body.username;
    console.log(sesh.user);
    res.redirect("info");
});

module.exports = app;