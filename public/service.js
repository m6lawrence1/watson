var app = angular.module('myModule');


app.service('storedData',function(){
storeResponse = function() {
    return $cookies.response;
}
});
