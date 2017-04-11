'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */

// creer application
var myApp = angular.module('angularTestApp');

	
// creer controller principal
myApp.controller('MainCtrl', function ($scope, formPatterns) {

  	// function to submit the form after all validation has occurred 
  	$scope.submitForm = function(isValid) {

    	// check to make sure the form is completely valid
    	if (isValid) {
      		alert('votre formulaire est validé');
    	}

  	};

  	// Variable pour faire le lien avec la view
  	$scope.formPatterns = formPatterns;
});

