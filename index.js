var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var app = express();
var homepage = require('./routes/homepage');
var login = require('./routes/login');
var userprofile = require('./routes/userprofile');
var bodyparser = require('body-parser');


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