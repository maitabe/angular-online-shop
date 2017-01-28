app.factory('shopService', ['$http', function($http) {

	var shopService = {
		//add the products inside array
		// motzarim: [],
		//get json
		getProducts: function(){
			console.log('this is the service');
		  return $http.get('/products').then(function(products){
				console.log(products.data);
				angular.copy(products.data);
			});
		}
	};

	return shopService;

}]);