'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
  .module('myappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    	.when('/', {
			redirectTo: '/homepage',
		})
		.when('/homepage', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/launch', {
			templateUrl: 'views/launch.html',
			controller: 'LaunchCtrl'
		})
		.when('/join', {
			templateUrl: 'views/join.html',
			controller: 'JoinCtrl'
		})
		.when('/404', {
			templateUrl: '404.html',
			controller: ''
		})
		.otherwise({
			redirectTo: '/404',
		});
  });
