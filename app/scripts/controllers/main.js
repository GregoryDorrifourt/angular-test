'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  
  angular.module('validationApp', []);
  .controller('MainCtrl', function($scope) {   
    $scope.submitForm = function() {
      if ($scope.userForm.$valid) {
        alert('my form is amazing');
      }

    };

  });
