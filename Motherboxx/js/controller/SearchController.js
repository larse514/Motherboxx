/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
 {
    var angularApp = angular.module("MOTHERBOXX");
    //Controller class for login functionality
    var SearchController = function ($scope, $http ){
        $scope.next_offset = 0;
        $scope.key = ''
        $scope.param = ''
        $scope.number_of_total_results = 0;    
        //todo-refactor into constants file to be injected into this
        $scope.limit = 6
        $scope.results =[];
        $scope.keys=[];
        $scope.title = "NEW COMICS FOR 05/26/2016"
             
        window.onscroll = angular.bind(this, function(){
            if ($(window).scrollTop() >= $('#test').offset().top + $('#test').outerHeight() - window.innerHeight) {
                searchIssuesCall($scope.key, $scope.param, $scope.next_offset, $scope.limit, addIssues)
            }
        });
        $scope.loadMore = function() {
            searchIssuesCall(key, param, next_offset, addIssues);

        };
        $scope.searchIssues = function(key, param) {
            $scope.next_offset = 0;
            $scope.title = "Results for: " + param;
            searchIssuesCall(key, param, $scope.next_offset, $scope.limit, setSearchResults);
        }
        function setSearchResults(response){
            $scope.next_offset = response.data.next_offset
            var array = []
            //need to strip the darn html tags
            response.data.results.forEach(function(val, index){
                var desc = val.description
                if(desc){
                    val.description = desc.replace(/<\/?[^>]+(>|$)/g, "")
                }
                array.push(val)
            })
            $scope.results = array
        }
        function addIssues(response){
            $scope.next_offset = response.data.next_offset
            //need to strip the darn html tags
            response.data.results.forEach(function(val, index){
                var desc = val.description
                if(desc){
                    val.description = desc.replace(/<\/?[^>]+(>|$)/g, "")
                }
                $scope.results.push(val)
            })
           $scope.$digest();
        }
        function searchIssuesCall(key, param, offset, limit, next){
            $http({
                        method: 'GET',
                        //todo-update this and put in config file
                        url: 'http://ec2-52-41-67-194.us-west-2.compute.amazonaws.com:8080/issues',
                        params: {key: key, param : param, offset : offset, limit:limit}
                }).then(function successCallback(response) {
                        //just get first for now
                        next(response.data);
                        //otherwise it's been added                 
              }, function errorCallback(response) {
                    alert("failed request with error" + response);
              });
        }

        function setKeys(){
            //todo- set these dynamically
            $scope.keys = ['name', 'author'];
        }
        function init(){
            searchIssuesCall($scope.key, $scope.param, $scope.next_offset, $scope.limit, setSearchResults)
            setKeys()
        }

        init()

    }
    angularApp.controller("SearchController",["$scope","$http", SearchController])


}());