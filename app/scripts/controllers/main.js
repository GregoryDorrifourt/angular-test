'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */



  angular.module('angularTestApp')
  .controller('MainCtrl', function($scope) {
    $scope.reset = function(){
       /*$scope.firstName = "Toto";
       $scope.lastName = "Tutu";
       $scope.email = "tototutu@gmail.com";*/
       $scope.submitForm = function(isValid) {
            alert('Fantastiqueeeeeee');
        };
    };

    $scope.reset();
 });
