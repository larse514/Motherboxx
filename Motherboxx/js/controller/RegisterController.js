/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
 {
	var angularApp = angular.module("MOTHERBOXX");
	//Controller class for login functionality
	var RegisterController = function ($scope, $http, NavigationService) {
		/**
         * Method to store auth token
         * @param response
         */
		var onSuccess = function(response){
			application.showAlert("Login Successful!", '')
			//todo-store token
			//storeToken(response.data);
			//todo-once token is stored, redirect to feed.html
			NavigationService.goToPage("/")

		};
		/**
         * Method to handle error from login method
         * @param error
         */
		var onError = function(error){
			application.showAlert("Failed to load server data",error)

		};
		//todo-scope to check if location is checked
		$scope.register = function(userName,password, firstName, lastName, emailAddress){
			$http.post(
				JSON.parse(localStorage.OPENSHIFT).URLS.SIGN_UP,
				{
					userName:userName,
					password:password,
					firstName:firstName,
					lastName:lastName,
					emailAddress:emailAddress
				}
			).then(onSuccess, onError)
		} 
	}
	angularApp.controller("RegisterController", ["$scope","$http","NavigationService", RegisterController])


}());