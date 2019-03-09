var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var app = express();
var homepage = require('./routes/homepage');
var login = require('./routes/login');
var signup = require('./routes/signup');
var userprofile = require('./routes/userprofile');
var bodyparser = require('body-parser');
var info = require('./routes/info');
var db = require('./routes/db');
var session = require('express-session');
var activities = require('./routes/activities');
var events = require('./routes/events');

app.use(bodyparser.urlencoded({
    extended: true}));
app.engine('handlebars', handlebars.engine);
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'handlebars');

app.listen(app.get('port'), function(){
    console.log('started');
});


app.use('/login', login);
app.use('/', homepage);
app.use('/userprofile', userprofile);
app.use('/info', info);
app.use('/signup', signup);
app.use('/activities', activities);
app.use('/events', events);