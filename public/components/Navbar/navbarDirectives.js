directives.directive('navbar', function(){
	return {
		restrict: 'E',
		templateUrl: 'components/Navbar/navbar.html',
		controller: ["$scope", "$window", "$http", "$log", "$route", "summoner", function($scope, $window, $http, $log, $route, summoner){
			
		}],
		controllerAs:'navbar'
	};
});
