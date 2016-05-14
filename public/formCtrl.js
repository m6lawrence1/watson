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
        // .success(response) {
        .then(function(response) {
            console.log("response");
//		    $scope.yay = response.data;
//            console.log(data);

        }, function errorCallback(response) {
        alert('error');
        });
  };
});
//    console.log('this is the form controller');
//}]);
