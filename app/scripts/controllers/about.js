'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestApp
 */
var app = angular.module('angularTestApp');
app.controller('AboutCtrl', function ($scope) { // ici, une variable ($scope) qui est passé en paramètre.


    this.toto = {};

    // Exercice pour le scope (le scope fait le lien entre le controller et la vue)
    $scope.comments = [
	    {
	    	"username" : "Grand",
	    	"city" : "Fosses",
	    	"email" : "aurore.grand@gmail.com",
	    	"content" : "elit sint excepteur pariatur voluptate"  
	    },
	    {
	    	"username" : "David",
	    	"city" : "Blanc-Mesnil",
	    	"email" : "david.flexine@gmail.com",
	    	"content" : "anim exercitation laboris aliqua ad"
	    }
    ];

  });
