'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.mask',
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/exo1', {
        templateUrl: 'views/exo1-form.html',
        controller: 'FormCtrl',
        controllerAs: 'vm'
      })
      .when('/exo2', {
        templateUrl: 'views/exo2-file-list.html',
        controller: 'Exo2Ctrl',
        controllerAs: 'vm'
      })
      .when('/testjs', {
        templateUrl: 'views/testjs.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
