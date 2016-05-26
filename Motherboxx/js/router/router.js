/**
 * Created by andrew.larsen on 5/24/2016.
 */
(function()
 {
	var angularApp = angular.module("loginViewer");
	var routingConfig = function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/butthole', {
                template : '<form id="loginForm"><div class="loginInput"><input type="input" id="userName" placeholder="Email Address" class="input" ng-model="userName"></div>					<div class="loginInput">						<input type="password" name="Password" id="Password" placeholder="Password" class="input" ng-model="password">					</div>					<div class="buttonWrapper">					<a href="" id="loginButton" class="button loginButton" ng-click="login(userName, password)">Login</a>					<a href="" id="registerButton" class="button registerButton" ng-click="helloLocation()">Register</a>					<a href="" id="forgotPasswordLink" class="forgotPasswordLink">Forgot Password?</a>					<a href="landingPage.html" class="landingPageButton">Go to landing page </a>					</div>				</form>	',
                controller  : 'LoginController'
            })
            .otherwise('/butthole')
    };

    angularApp.config(["$routeProvider",routingConfig])


}());