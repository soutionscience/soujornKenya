(function(){
angular.module("myApp")


.controller('mainCtrl', mainCtrl );

	 mainCtrl.$inject = ['$scope', 'packageService'];

	 function mainCtrl($scope, packageService){
	 	

	 	$scope.dataset =[];
	 	this.$onInit = function(){
	 		packageService.getItems().then (function(result){
	 			$scope.dataset= result;
	 			
	 		})
	 	}
	 }


})();