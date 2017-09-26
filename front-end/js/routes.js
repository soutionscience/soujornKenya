(function(){
angular.module("myApp").
config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	 $urlRouterProvider.otherwise('/home');

 $stateProvider
    .state('home', {
      url: '/home',
      controller: 'mainCtrl',
      templateUrl:'views/content/home.html'
    })
    .state('about',{
    	url: '/about-us',
    	controller: 'contentCtrl',
    	templateUrl: 'views/content/aboutus.html'
    })
     .state('contact-us',{
    	url: '/contact-us',
    	controller: 'contentCtrl',
    	templateUrl: 'views/content/contact-us.html'
    })

    .state('single-package',{
    	url: '/package/{itemId}',
    	templateUrl: 'views/content/single-package.html',
    	controller: 'packageCtrl',
   		resolve:{
				item:['$stateParams', 'packageService', 
				function($stateParams, packageService){
					return packageService.getItems().
					then(function(items){
						return items[$stateParams.itemId]

					})
				}]
			}
    })
    ;

	// when('/', {
	// 	templateUrl:'views/content/home.html'
	// }).
	// when('/production', {
	// 	templateUrl:'views/content/production.html'
	// }).
	// otherwise({
	// 	redirectTo:'/'
	// });

	
}]);
})();
