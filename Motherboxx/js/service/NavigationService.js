/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
 {
	var angularApp = angular.module("MOTHERBOXX",[]);
	//Controller class for login functionality
	var NavigationService = function () {
		var androidPath = "android_asset/www/register.html"
		var goToPage = function(path){
			if(window.location.hostname !== "localhost"){
				path = $scope.androidPath + path
			}
			window.location.pathname = path;
		} 
		return {goToPage:goToPage}
	}
	angularApp.service("NavigationService", [NavigationService])


}());