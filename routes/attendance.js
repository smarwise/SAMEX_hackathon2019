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
res.render('attendance', {
    

});
});

app.post('/', function(req, res){
var attendance = req.body.attendance;
db.query("INSERT INTO `attendance` (username, event) VALUES ('"+attendance+"', '"+sesh.user+"')");
db.query("SELECT * FROM `attendance` WHERE username = '"+sesh.user+"'", function(ret){
    db.query("UPDATE `merits` SET events='"+ret+"' WHERE username = '"+sesh.user+"'" )
}
);
});

module.exports = app;