var express = require('express');
var watson = require('watson-developer-cloud');
var bodyParser = require('body-parser');
// var profile = require('./service');
var app = express();



// var my_profile = "Call me Ishmael. Some years ago-never mind h-ow long precisely-having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off-then, I account it high time to get to sea as soon as I can.";

    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json());



app.post('/api',function(req, res){
    var personality_insights = watson.personality_insights({
        username: '40e862ed-0b2a-48a5-87b9-be1d2d37e63b',
        password: 'lSbzo8yacgjP',
        version: 'v2'
    });
    
   
    
    var my_profile = req.body.body;
//    console.log(req.body.body);
//    console.log("this works");
//     res.personality_insights();
    personality_insights.profile({text: my_profile}, function (err, profile) {
        if (err) {
            console.log(err)
        } else {
            console.log(profile);
            res.send(profile);
            });
        }
    });

});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("fml");
});

app.use(express.static(__dirname + '/public'));
