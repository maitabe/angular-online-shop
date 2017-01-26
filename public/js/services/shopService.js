app.factory('shopService', ['$http', function($http) {

	var shopService = {
		//get json
		getProducts: function(){
			$http.get('/products').then(function(products){
				console.log(products);
			});
		}
	};

	return shopService;

}]);