var app = angular.module('myModule', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/form", {
			controller: "formCtrl",
			templateUrl: "form.html"
		})
		.when("/about", {
			controller: "aboutCtrl",
			templateUrl: "about.html"
		})
		.when("/output", {
			controller: "formCtrl",
			templateUrl: "output.html"
		})
		.otherwise({redirectTo: "/"});
});
