var app = angular.module('myModule');

app.controller('formCtrl', function ($scope, $http){
    $scope.personalitize = function () {
        $http.post('/api', {"body":$scope.textInput})
        .then(function(response) {
            console.log(response);
            $scope.children=response.data.tree.children[0].children[0].children;
            $scope.subcat=response.data.tree.children[0].children[0].children[1].children;
            $scope.subcat3=response.data.tree.children[0].children[0].children[2].children;

        }, function errorCallback(response) {
        alert('error');
        });
  };
});
