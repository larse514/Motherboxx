/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
 {
	var angularApp = angular.module("loginViewer", ['ngRoute']);
	//Controller class for login functionality
	var LoginController = function ($scope, $http,$location) {
		/**
         * Method to store auth token
         * @param response
         */
		var onSuccess = function(response){
			app.showAlert("Login Successful!", '')
			storeToken(response.data);

		};
		/**
         * Method to handle error from login method
         * @param error
         */
		var onError = function(error){
			app.showAlert("Failed to load server data",error)
		};
		/**
         * Method to submit login request to Login API
         * Will return an auth token generated by the server
         * @param userName
         * @param password
         */
		$scope.login = function(userName, password) {
			//submit post
			$http.post(
				JSON.parse(localStorage.OPENSHIFT).URLS.LOGIN,
				{
					userName: userName, password: password
				}
			).then(onSuccess, onError)
		};
		$scope.test = function(){
			$http.post(
				JSON.parse(localStorage.OPENSHIFT).URLS.HELLO_WORLD,
				{
					headers: {'x-access-token': localStorage.token}
				}).then(onSuccess,onError)
		};
		$scope.helloLocation = function(){
			navigator.geolocation.getCurrentPosition(function(position)
													 {
				// just to show how to access latitute and longitude
				var location = [position.coords.latitude, position.coords.longitude];
				alert(location)
			},
													 function(error)
													 {
				// error getting GPS coordinates
				alert('code: ' + error.code + ' with message: ' + error.message + '\n');
			},
													 { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 });
		}
		/**
         * Method to store token data
         * @param data
         */
		var storeToken = function(data){
			//for now lets just store the tokens
			localStorage.token = data.token;
			localStorage.expires = parseInt(data.expires);
		}
		};

	

	angularApp.controller("LoginController", ["$scope","$http",LoginController])


}());