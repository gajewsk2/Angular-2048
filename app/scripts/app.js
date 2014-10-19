'use strict';

/**
 * @ngdoc overview
 * @name 2048App
 * @description
 * # 2048App
 *
 * Main module of the application.
 */
angular
  .module('2048App', ['Game'])
  .controller('GameController', function (GameManager) {
		this.game = GameManager;
  });

//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//  });
