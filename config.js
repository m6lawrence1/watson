var app = angular.module('myModule', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/form", {
			controller: "formCtrl",
			templateUrl: "form.html"
		})
		.when("/output", {
			controller: "app",
			templateUrl: "output.html"
		})
		.otherwise({redirectTo: "/"});
});