var app = angular.module('myModule');

app.controller('formCtrl', ['$scope', 'watsonService', function ($scope, watsonService) {
    console.log('num1');
    
	$scope.personalitize = function () {
		var inputText = $scope.text;
        console.log('hello');
    }
    watsonService(inputText);

    console.log('this is the form controller');
}]);