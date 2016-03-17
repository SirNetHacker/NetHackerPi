(function(){
	var index = angular.module('lolstattools', ['ngRoute', 'lolstattools.controllers', 'lolstattools.directives', 'lolstattools.services']);
	
	index.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "components/Home/home.html",
			controller:"HomeController as home"
		}).when("/services", {
			templateUrl: "components/Services/serviceIndex.html",
			controller:"ServiceHomeController as service"
		}).otherwise("/not-found", {
			templateUrl: "components/ErrorPages/not-found.html", 
			controller: "ErrorController"
		});
	}]);
	/* an example of a filter in angularjs
	index.filter('trustAsResourceUrl', ['$sce', function($sce) {
    	return function(val) {
        	return $sce.trustAsResourceUrl(val);
    	};
	}]);*/
})();
