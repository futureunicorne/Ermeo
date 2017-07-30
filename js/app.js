var myApp = angular.module("myApp", ["ngRoute"]);

//module pour utiliser mon serveur local
myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

//module de gestion de route
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
	})
	.otherwise({redirectTo:'/'});
});
