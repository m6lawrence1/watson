var express = require('express'); 
var watson = require('watson-developer-cloud');
var app = express();

var personality_insights = watson.personality_insights({
  username: '40e862ed-0b2a-48a5-87b9-be1d2d37e63b',
  password: 'lSbzo8yacgjP',
  version: 'v2'
});

var server = app.listen(3000, function () { 
    var host = server.address().address;
    var port = server.address().port;
    console.log("fml");
});
    
app.use(express.static(__dirname + '/public'));


});
