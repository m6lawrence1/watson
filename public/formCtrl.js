var app = angular.module('myModule');

app.controller('formCtrl', function ($scope, $http){
    $scope.personalitize = function () {
        $http.post('/api', {"body":$scope.textInput})
        .then(function(response) {
            console.log(response);
            $scope.children=response;
        }, function errorCallback(response) {
        alert('error');
        });
  };
});
