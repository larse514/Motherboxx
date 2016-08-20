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
				alert(window.location)
				window.location.pathname = "file:///android_asset/www/register.html"
			}
		} 
	}
	angularApp.controller("RegisterController", ["$scope","$http","$location",RegisterController])


}());