var app = angular.module('myModule');

app.controller('formCtrl', ['$scope', 'watsonService', function ($scope, watsonService) {
    console.log('num1');


    $http({
     method: 'GET',
     url: '../index.js'
    function successCallback(response) {
      $scope.xx=response.xx;
  });
    console.log('this is the form controller');
}]);
