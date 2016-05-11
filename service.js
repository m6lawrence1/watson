var app = angular.module('myModule');

app.factory('watsonService', function() {
    var watson = require('watson-developer-cloud');

    var my_profile;
    function getdata(text) {
        my_profile = text;
    
    
        var personality_insights = watson.personality_insights({
          username: '40e862ed-0b2a-48a5-87b9-be1d2d37e63b',
          password: 'lSbzo8yacgjP',
          version: 'v2'
        });

            personality_insights.profile({ text: my_profile },
        function (err, profile) {
          if (err)
            console.log(err)
          else
            console.log(profile);
        });
    }
    return getdata;
});