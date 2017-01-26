var app = angular.module('onlineShop', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'partial-home.html'
	});
});