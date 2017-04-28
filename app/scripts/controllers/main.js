'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */

// Creer application
var myApp = angular.module('angularTestApp');

	
// Creer controller principal
myApp.controller('MainCtrl', function ($scope) {

    $scope.currentItems = "";

    $scope.setItems = function(id){
        $scope.currentItems = id;
    };

    $scope.menu = [
        {
          "item" : "Home",
          "id" : "home",
          "url" : "#/"
        },
        {
          "item" : "About",
          "id" : "about",
          "url" : "#/about"
        },
        {
          "item" : "Form",
          "id" : "form",
          "url" : "#/exo1"
        },
        {
          "item" : "File list",
          "id" : "file_list",
          "url" : "#/exo2"
        },
        {
          "item" : "Test JS",
          "id" : "test_js",
          "url" : "#/testjs"
        },
    ];

  	
});

