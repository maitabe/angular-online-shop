app.controller('mainCtrl', ['$scope', 'shopService', function($scope, shopService) {

	$scope.test = shopService.getProducts();



}]);