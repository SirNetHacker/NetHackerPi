controllers.controller('IndexController', ["$scope", "$window", "$http", "$log", '$location', function($scope, $window, $http, $log, $location){
	$scope.changeLocation = function(location){
		$location.path(location);
	}
}]);