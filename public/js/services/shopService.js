app.factory('shopService', ['$http','$q', function($http,$q) {
	//decided whichm ethod fits best
	var shopService = {
		//add the products inside array
		products: [],
		//get json
		getProducts: function(){
			console.log('this is the service');
		  return $http.get('/products').then(function(products){
				console.log(products.data);
				angular.copy(products.data, shopService.products);
			});
		},
		//promises
		getProducts2: function(){
			var deferred = $q.defer();
			// check if products is empty then populated from server
			if(this.products.length === 0)
			{
				// products cache property is empty, need to call server
				$http.get('/products').then(function(products){
				console.log('got data from server');
					this.products = products.data;
					deferred.resolve(this.products);

				});
			}else {
				// there is cache avilable , return it imediately
				deferred.resolve(this.products);
				deferred.reject('not good');
			}

			return deferred.promise;

		},
		getPro: function(){
			console.log('getPro (sync func)');
			return true;
		},
			getProducts3: function(){
			 return $http.get('/products').then(function(products){
				console.log('inner then');
				});

		}
	};

	return shopService;

}]);