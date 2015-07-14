
/* ------------------------------------------------------- 

* Filename:     AngularJS Routing
* Website:      
* Description:  Portfolio
* Author:       Shravan Kumar Konuganti

---------------------------------------------------------*/

var portfolioApp = angular.module('portfolioApp', ['ngRoute','ngAnimate']);

// configure routes

portfolioApp.config(function($routeProvider) {
    
    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html',
            controller: 'homeController'
        })

        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller: 'contactController'
        })

        .when('/skill', {
            templateUrl : 'pages/skill.html',
            controller: 'skillController'
        })
        .when('/projects', {
            templateUrl : 'pages/projects.html',
            controller: 'projectsController'
        })
        .when('/hobbies', {
            templateUrl : 'pages/hobbies.html',
            controller: 'hobbiesController'
        });
});

portfolioApp.controller('homeController', function($scope) {
    $scope.pageClass = 'page-home';
});

portfolioApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

portfolioApp.controller('skillController', function($scope) {
    $scope.pageClass = 'page-skill';
});
portfolioApp.controller('projectsController', function($scope) {
    $scope.pageClass = 'page-projects';
});
portfolioApp.controller('hobbiesController', function($scope) {
    $scope.pageClass = 'page-hobbies';
});


