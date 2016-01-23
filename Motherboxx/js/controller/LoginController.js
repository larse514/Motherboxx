/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
{
    var angularApp = angular.module("loginViewer", []);
    var LoginController = function ($scope, $http) {

        $http.get({
            url:"http://mbloginservice-larslarslars.rhcloud.com/test",
            dataType: 'jsonp',
            method: 'GET'
            })
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