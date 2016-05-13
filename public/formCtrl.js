var app = angular.module('myModule');

// app.controller('formCtrl', function ($scope, $http){
//     $scope.personalitize = function () {
//         $http.post('/api', {"body":$scope.textInput})
//          .then(function successCallback(response) {
//             var profileOutput = profile.response;
//             $scope.id = profile;
//             console.log('profileOutput');
//
//         }, function errorCallback(response) {
//         alert('error');
//         });
//   };
// });
app.controller('formCtrl', function ($scope, $http){
    $scope.personalitize = function () {
        $http.post('/api', {"body":$scope.textInput})
         .then(function successCallback(response) {
            $scope.children = response;

        }, function errorCallback(response) {
        alert('error');
        });
  };
});
//    console.log('this is the form controller');
//}]);
