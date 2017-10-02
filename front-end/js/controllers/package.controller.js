(function(){

	angular.module("myApp")

	.controller('packageCtrl', packageCtrl);

	packageCtrl.$inject =['$scope', 'item']

	function packageCtrl($scope, item){

		$scope.msg = "tester hia";
		$scope.dataset = [];
		$scope.dataset = item;

		// console.log($scope.msg)
		console.log("what is in: " + $scope.dataset.Day1.Package)
		// console.log("what is in: " + $scope.dataset.Day1.image)

	
	};
})();
