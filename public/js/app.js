var app = angular.module('onlineShop', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'mainCtrl'
		})
		.state('products', {
			url: '/products',
			templateUrl: 'templates/products.html',
			controller: 'productCtrl',
			resolve: {
				postPromise: ['shopService', function(shopService){
					return shopService.getProducts();
				}]
			}
		})
		.state('about', {
			url:'/about',
			templateUrl: 'templates/about.html'
		});

	$urlRouterProvider.otherwise('/home');
}]);