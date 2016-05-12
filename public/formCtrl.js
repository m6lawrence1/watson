var app = angular.module('myModule');

// app.controller('formCtrl', ['$scope', 'watsonService', function ($scope, watsonService) {
//     console.log('num1');

app.controller('formCtrl',function(
    on('click', personalitize(){
        $http({
         method: 'GET',
         url: '../index.js'
     }))
         .then(function successCallback(response) {
             var profileOutput = myService.valueSetter();
             $scope.xx = profileOutput.xx;
             $scope.xx = profileOutput.xx;
             $scope.xx = profileOutput.xx;
      }, function errorCallback(response) {
        alert('error');
))
  })
 });
    console.log('this is the form controller');
}]);
