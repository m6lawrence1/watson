var app = angular.module('myModule');

app.controller('formCtrl', function ($scope, $http){
    $scope.personalitize = function () {
        $http.post('/api', {"body":$scope.textInput})
         .then(function successCallback(response) {
//             var profileOutput = myService.valueSetter();
//             $scope.xx = profileOutput.xx;
            console.log("response");

        }, function errorCallback(response) {
        alert('error');
        });
  };
});

//    console.log('this is the form controller');
//}]);
