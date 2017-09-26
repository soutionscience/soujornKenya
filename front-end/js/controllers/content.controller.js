(function(){
	angular.module("myApp")
	.controller('contentCtrl', contentCtrl);


	contentCtrl.$inject =['$scope', 'packageService'];

	function contentCtrl($scope, packageService){
		$scope.content =[];

		this.$onInit = function(){
			packageService.getContent().then(function(result){
				$scope.content = result;
				console.log($scope.content)

			})
		}

		

	}


})();