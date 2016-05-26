/**
 * Created by andrew.larsen on 5/24/2016.
 */
(function()
 {
	var angularApp = angular.module("loginViewer");
	var routingConfig = function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/signIn', {
                templateUrl : 'views/signIn.html',
                controller  : 'LoginController'
            })
            .otherwise('/signIn')
    };

    angularApp.config(["$routeProvider",routingConfig])


}());