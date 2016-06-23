/**
 * Created by andrew.larsen on 5/24/2016.
 */
(function()
 {
	var angularApp = angular.module("MOTHERBOXX");
	var routingConfig = function($routeProvider) {
        $routeProvider

            // route for the landing page
            .when('/landing', {
                templateUrl : 'landingPage.html',
                controller  : 'LandingController'
            })
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
            .otherwise('/search')

    };

    angularApp.config(["$routeProvider",routingConfig])


}());