var express = require('express');
var express = require('express');
var watson = require('watson-developer-cloud');
var bodyParser = require('body-parser');
var app = express();

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
    personality_insights.profile({text: my_profile}, function (err, profile) {
        if (err) {
            console.log(err)
        } else {
            console.log(profile);
            res.send(profile);
        }
    });

});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("fml");
});

app.use(express.static(__dirname + '/public'));
