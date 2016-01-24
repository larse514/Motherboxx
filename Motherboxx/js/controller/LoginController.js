/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
{
    var angularApp = angular.module("loginViewer", []);
    var LoginController = function ($scope, $http) {

        var onSuccess = function(response){
            app.showAlert("Success", response.data)
        };

        var onError = function(error){
            app.showAlert("Failed to load server data",error)
        };

        $scope.login = function(userName, password) {
            $http.post(
                "http://mbloginservice-larslarslars.rhcloud.com/login",
                {
                    userName: userName, password: password
                }
            ).then(onSuccess, onError)
        }
    };

    angularApp.controller("LoginController", ["$scope","$http",LoginController])
}());