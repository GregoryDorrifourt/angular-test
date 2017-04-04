'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */



  angular.module('angularTestApp')
  .controller('MainCtrl', ['$scope',
        function($scope) {
            $scope.firstTitle = "Contrat" ; 
            
            $scope.submitForm = function($valid) {
                console.log('Fantastiqueeeeeee');
            };
  
 }]);

  
