app.controller('mainCtrl', function($scope, $http){

	

	$http.get('data.json').then(function(result){
		

		$scope.dataset= result.data;
		
	})
	
})