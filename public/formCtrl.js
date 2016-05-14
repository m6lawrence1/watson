var app = angular.module('myModule');

app.controller('formCtrl', function ($scope, $http){
    $scope.personalitize = function () {
        $http.post('/api', {"body":$scope.textInput})
        .then(function(response) {
            console.log(response);
            $scope.children=response.data.tree.children[0].children[0].children;
            $scope.children=response.data.tree.children[1].children[1].children;

        }, function errorCallback(response) {
        alert('error');
        });
  };
});
