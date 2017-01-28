app.controller('productCtrl', ['$scope', 'shopService', function($scope, shopService) {

	// get data without cache stright from server
	// shopService.getProducts().then(function(data){
	// 	console.log(data.data);
	// 	$scope.products = data.data;
	// });

	// get products - maybe cached in service
	shopService.getProducts2().then(function(){
		$scope.products = shopService.products;
	});

console.log('after getPro');

}]);