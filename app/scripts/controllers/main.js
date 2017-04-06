'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */

// create angular app
var myApp = angular.module('angularTestApp');
	
	// create angular controller
	myApp.controller('MainCtrl', function ($scope) {

	  	// function to submit the form after all validation has occurred 
	  	$scope.submitForm = function(isValid) {

	    	// check to make sure the form is completely valid
	    	if (isValid) {
	      		alert('votre formulaire est validé');
	    	}

	  	};

    });
