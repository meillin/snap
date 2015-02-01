var app = angular.module('myApp', ['ngRoute', 'viewControllers']);

app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'temp/home.html',
				controller: 'homeCtrl'
			}).
			when('/basic', {
				templateUrl: 'temp/basic.html',
				controller: 'basicCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
}]);
