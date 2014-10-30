var app = angular.module('spaApp', ['ui.router']);


app.config( function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/home',
		template: '<h1> NG ROCKS! </h1>'
	})
	.state('about', {
		url: '/about',
		template: '<h1>About Stuff </h1><ui sref=".portfolio"></a><div ui-view></div>'
	})
	.state('about.portfolio', {
		url: '/portfolio',
		template: '<h1>PORTFOLIO</h1>'
	})
});