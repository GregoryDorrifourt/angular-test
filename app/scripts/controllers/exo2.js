'use strict';


angular.module('angularTestApp')
  .controller('Exo2Ctrl', function ($scope) {

  	$scope.currentCategory = "";

  	$scope.setCategory = function(id){
  		$scope.currentCategory = id;
  	};

  	$scope.categories = {
  		COURS: {
  			id: "cours",
  			label: "Cours"
  		},
  		EXERCICES: {
  			id: "exercices",
  			label: "Exercices"
  		},
  		EVALUATIONS: {
  			id: "evaluations",
  			label: "Evaluations"
  		}
  	};

  	$scope.informations = [
	    { // COURS
	      "title" : "Niveau ignorant",
	      "name_file" : "cours_ignorant.pdf",
	      "file" : "files/exercice2/1_cours_ignorant.pdf",
	      "categorie" : $scope.categories.COURS
	    },
	    {
	      "title" : "Niveau débutant",
	      "name_file" : "cours_debutant.pdf",
	      "file" : "files/exercice2/2_cours_debutant.pdf",
	      "categorie" : $scope.categories.COURS
	    },
	    {
	      "title" : "Niveau intermediaire",
	      "name_file" : "cours_intermediaire.pdf",
	      "file" : "files/exercice2/3_cours_intermediaire.pdf",
	      "categorie" : $scope.categories.COURS
	    },
	    {
	      "title" : "Niveau confirmé",
	      "name_file" : "cours_confirme.pdf",
	      "file" : "files/exercice2/4_cours_confirme.pdf",
	      "categorie" : $scope.categories.COURS
	    },
	    {
	      "title" : "Niveau expert",
	      "name_file" : "cours_expert.pdf",
	      "file" : "files/exercice2/5_cours_expert.pdf",
	      "categorie" : $scope.categories.COURS
	    },
	    { // EXCERCICES
	      "title" : "Niveau ignorant I",
	      "name_file" : "exercices_ignorant_1.pdf",
	      "file" : "files/exercice2/6_exercices_ignorant_1.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    {
	      "title" : "Niveau ignorant II",
	      "name_file" : "exercices_ignorant_2.pdf",
	      "file" : "files/exercice2/7_exercices_ignorant_2.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    {
	      "title" : "Niveau débutant I",
	      "name_file" : "exercices_debutant_1.pdf",
	      "file" : "files/exercice2/8_exercices_debutant_1.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    {
	      "title" : "Niveau débutant II",
	      "name_file" : "exercices_debutant_2.pdf",
	      "file" : "files/exercice2/9_exercices_debutant_2.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    { 
	      "title" : "Niveau intermediaire I",
	      "name_file" : "exercices_intermediaire_1.pdf",
	      "file" : "files/exercice2/10_exercices_intermediaire_1.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    { 
	      "title" : "Niveau intermediaire II",
	      "name_file" : "exercices_intermediaire_2.pdf",
	      "file" : "files/exercice2/11_exercices_intermediaire_2.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    { 
	      "title" : "Niveau intermediaire III",
	      "name_file" : "exercices_intermediaire_3.pdf",
	      "file" : "files/exercice2/12_exercices_intermediaire_3.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    {
	      "title" : "Niveau confirmé I",
	      "name_file" : "exercices_confirme_1.pdf",
	      "file" : "files/exercice2/13_exercices_confirme_1.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    {
	      "title" : "Niveau confirmé II",
	      "name_file" : "exercices_confirme_2.pdf",
	      "file" : "files/exercice2/14_exercices_confirme_2.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    {
	      "title" : "Niveau expert",
	      "name_file" : "exercices_expert.pdf",
	      "file" : "files/exercice2/15_exercices_expert.pdf",
	      "categorie" : $scope.categories.EXERCICES
	    },
	    { // EVALUATIONS
	      "title" : "Niveau ignorant",
	      "name_file" : "evaluation_ignorant.pdf",
	      "file" : "files/exercice2/16_evaluation_ignorant.pdf",
	      "categorie" : $scope.categories.EVALUATIONS
	    },
	    {
	      "title" : "Niveau débutant",
	      "name_file" : "evaluation_debutant.pdf",
	      "file" : "files/exercice2/17_evaluation_debutant",
	      "categorie" : $scope.categories.EVALUATIONS
	    },
	    {
	      "title" : "Niveau intermediaire",
	      "name_file" : "evaluation_intermediaire.pdf",
	      "file" : "files/exercice2/18_evaluation_intermediaire",
	      "categorie" : $scope.categories.EVALUATIONS
	    },
	    {
	      "title" : "Niveau confirmé",
	      "name_file" : "evaluation_confirme.pdf",
	      "file" : "files/exercice2/19_evaluation_confirme",
	      "categorie" : $scope.categories.EVALUATIONS
	    },
	    {
	      "title" : "Niveau expert",
	      "name_file" : "evaluation_expert.pdf",
	      "file" : "files/exercice2/20_evaluation_expert",
	      "categorie" : $scope.categories.EVALUATIONS
	    }
  	];
  	
  });
