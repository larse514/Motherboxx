/**
 * Created by andrew.larsen on 5/24/2016.
 */
(function()
 {
	var angularApp = angular.module("MOTHERBOXX", ['ngRoute']);
	var routingConfig = function($routeProvider,  $compileProvider) {
        $routeProvider

            // route for the landing page
            .when('/search', {
                templateUrl : 'views/home/search.html',
                controller : 'SearchController'
            })
            .when('/contacts', {
                templateUrl : 'views/home/contacts.html'
                
            })
            .when('/projects', {
                templateUrl : 'views/home/projects.html'
                
            })
            .when('/blog', {
                templateUrl : 'views/home/blog.html'
                
            })
            .when('/signIn', {
                templateUrl : '/views/signIn.html',
                controller  : 'LoginController'
            })
            .otherwise('/signIn')
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

    };


    angularApp.config(["$routeProvider", "$compileProvider",routingConfig])


}());