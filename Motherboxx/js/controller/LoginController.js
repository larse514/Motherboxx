/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
{
    var angularApp = angular.module("loginViewer", []);
    var LoginController = function ($scope, $http) {

        $http.post(
            "http://mblogins0ervice-larslarslars.rhcloud.com/login",
            {
                userName: "test", password: "password"
            }
        ).then(function (response) {
            $scope.dbinfo = response.data;
        }, function(error){
            app.showAlert("Failed to load server data","Server Error")
        })
    };

    angularApp.controller("LoginController", LoginController)
}());