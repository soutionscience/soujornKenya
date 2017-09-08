app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	 $urlRouterProvider.otherwise('/home');

 $stateProvider
    .state('home', {
      url: '/home',
      controller: 'mainCtrl',
      templateUrl:'views/content/template.html'
    })
    .state('maasai-mara-lake-nakuru',{
    	url: '/maasai-mara-lake-nakuru',
    	templateUrl: 'views/content/maasai-mara-lake-nakuru.html'
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

	
}])
