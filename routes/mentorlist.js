var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.render('mentorlist', {

    });
});




app.post('/', function(req, res){
    if (req.body.communication){
        console.log("Communication event");
        pskill = "PCommunication";
        dbskill = "pCommunication";
    }
    
    if (req.body.responsibilty){
        console.log("resonsibility event");
        pskill = "PResponsibility";
        dbskill = "pResponsibility";
    }
    
    if (req.body.criticalt){
        console.log("Communication event");
        pskill = "PCriticalt";
        dbskill = "pCriticalt";
    }
    console.log(pskill);
db.query("SELECT * FROM `user` WHERE "+dbskill+" = '"+pskill+"'", function(request, responce){
    if(responce[0] != undefined){
        console.log(responce[0]);
    }
    res.render('mentorlist', {
        mentor: responce
    });
});
});

module.exports = app;