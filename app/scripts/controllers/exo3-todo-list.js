'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:Exo3Ctrl
 * @description
 * # Exo3Ctrl
 * Controller of the angularTestApp
 */
 
var app = angular.module('angularTestApp');
app.controller('Exo3Ctrl', function ($scope) { 


	// Pour manipuler plus simplement les todos au sein du contrôleur
    // On initialise les todos avec un tableau vide : []
    var todos = $scope.todos = [];


    // AJOUTER UN TODO
    ///////////////////////
    $scope.addTodo = function () {

    	// .trim() permet de supprimer les espaces inutiles
    	// en début et fin d'une chaîne de caractères
    	var newTodo = $scope.newTodo.trim();
    	if (!newTodo.length) {
    		// éviter les todos vides
    		return;
    	}

    	todos.push ({
    		// on ajoute le todo au tableau des todos
    		title: newTodo,
    		completed: false
    	})

    	// réinitialisation de la variable newTodo
    	$scope.newTodo = '';
    }

    // TODOS ENREGISTRES
    ///////////////////////

    // enlever un todo
    $scope.removeTodo = function (todo) {
    	todos.splice(todos.indexOf(todo), 1);
    };

    // cocher / décocher tous les todos
    $scope.markAll = function (completed) {

    	todos.forEach(function (todo) {
    		todo.completed = !completed;
    	});
    }

    // enlever les todos cachés
    $scope.clearCompletedTodos = function () {

    	$scope.todos = todos = todos.filter(function (todo) {
    		return !todo.completed;
    	});
    };

});
