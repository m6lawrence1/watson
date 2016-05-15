var app = angular.module('myModule');

app.controller('formCtrl', function ($scope, $http){
    $scope.personalitize = function () {
        $http.post('/api', {"body":$scope.textInput})
        .then(function(response) {
            console.log(response);
            $scope.big5=response.data.tree.children[0].children[0].children;
            $scope.openness=response.data.tree.children[0].children[0].children[0].children;
            $scope.conscientiousness=response.data.tree.children[0].children[0].children[1].children;
            $scope.extraversion=response.data.tree.children[0].children[0].children[2].children;
            $scope.agreeableness=response.data.tree.children[0].children[0].children[3].children;
            $scope.emotional=response.data.tree.children[0].children[0].children[4].children;
            

        }, function errorCallback(response) {
        alert('error');
        });
  };
});
