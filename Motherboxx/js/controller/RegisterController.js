/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
 {
	var angularApp = angular.module("MOTHERBOXX",[]);
	//Controller class for login functionality
	var RegisterController = function ($scope, $http,$location) {
		$scope.hello = function(username,password){
			console.log(username,password)
			if(username === "larse514" && password == "password"){
				window.location.pathname = "/register.html"
			}
		} 
	}
	angularApp.controller("RegisterController", ["$scope","$http","$location",RegisterController])


}());