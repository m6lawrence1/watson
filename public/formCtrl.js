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
app.controller('formCtrl', function ($scope, $http, $templateCache){
    $scope.personalitize = function () {
        $http.post('/api', {"body":$scope.textInput, cache: $templateCache})
        // .success(response) {
        .then(function(response) {
                 $scope.status = response.status;
                 $scope.data = response.data;
               }, function(response) {
                 $scope.data = response.data || "Request failed";
                 $scope.status = response.status;
        //  .then(function successCallback(response) {
            // $scope.children = response;
            // $cookies.response=response;
            console.log(data);
            // $scope.moduleState = 'details';

        }, function errorCallback(response) {
        alert('error');
        });
  };
});
//    console.log('this is the form controller');
//}]);
