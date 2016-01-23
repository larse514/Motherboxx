/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
{
    var angularApp = angular.module("loginViewer", []);
    var LoginController = function ($scope, $http) {

        $http.get("http://mbloginservice-larslarslars.rhcloud.com/test")
            .success(function (data) {
                window.alert(data)
            })
            .error(function (data, status) {
                window.alert(data);
                window.alert(status);
            });
        $http.get("http://mbloginsefrvice-larslarslars.rhcloud.com/test")
            .success(function (data) {
                window.alert(data)
            })
            .error(function (data, status) {
                window.alert(data);
                window.alert(status);
            });
      //  .then(function (response) {
       //     $scope.dbinfo = response.data;
//        })

    };

    angularApp.controller("LoginController", LoginController)
}());