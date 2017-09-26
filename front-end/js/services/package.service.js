(function(){
	angular.module('myApp').service('packageService',packageService);
packageService.$inject=  ['$http'];

function packageService($http){
	console.log("am here");
	// function getItems(){
	// 	return $http.get('data.json').then(function(result){
	// 		return result;
	// 	})
	// }

this.getItems = function(){
		return $http.get('data.json').then(function(result){
			return result.data;
		})
	}

	this.getContent= function(){
		return $http.get('content.json').then(function(result){
			return result.data;
		})
	}
}

})();