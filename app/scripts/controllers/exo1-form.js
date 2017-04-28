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
myApp.controller('Exo1Ctrl', function ($scope, formPatterns) {

  	// Function to submit the form after all validation has occurred 
  	$scope.submitForm = function(isValid) {
  		
    	// Check to make sure the form is completely valid
    	if (isValid) {
      		alert('votre formulaire est validé');
    	}
  	};


	/* Variables
	* ===========================================================
	*/

	// fait le lien avec la view et le patterns
  	$scope.formPatterns = formPatterns;

    // template messages d'erreurs
    $scope.msg_error = 'partial/messages.html';


	/* Agencies (select)
	* ===========================================================
	*/

  	$scope.agencies = [
    	{name:'Bouygues Telecom',code:'01'},
      	{name:'Digitaweb', code:'02'},
      	{name:'Suza International', code:'03'},
      	{name:'Photopointcom', code:'04'}
    ];


    /* Department (select)
	* ===========================================================
	*/

    $scope.departments = [
      {name:'Ain',code:'01'},
      {name:'Aisne', code:'02'},
      {name:'Allier', code:'03'},
      {name:'Alpes-de-Haute-Provence', code:'04'},
      {name:'Hautes-Alpes', code:'05'},
      {name:'Alpes-Maritimes', code:'06'},
      {name:'Ardèche', code:'07'},
      {name:'Ardennes', code:'08'},
      {name:'Ariège', code:'09'},
      {name:'Aube', code:'10'}
    ];  
});

