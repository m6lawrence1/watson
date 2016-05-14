var app = angular.module('myModule');

<<<<<<< HEAD
app.controller('formCtrl', function ($scope, $http){
    $scope.personalitize = function () {
        $http.post('/api', {"body":$scope.textInput})
        .then(function(response) {
            console.log(response);
            $scope.children=response;
=======
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

>>>>>>> 306b8b874db1c904386e941466a39256ce1db471
        }, function errorCallback(response) {
        alert('error');
        });
  };
});
