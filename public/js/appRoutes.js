angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider

			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MainController'
			})

			.when('/patrons', {
				templateUrl: 'views/patron.html',
				controller: 'PatronController'
			});
		$locationProvider.html5Mode(true);
}]);