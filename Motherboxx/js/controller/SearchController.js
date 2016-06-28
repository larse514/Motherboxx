/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
 {
	var angularApp = angular.module("MOTHERBOXX", ['ngRoute']);
	//Controller class for login functionality
	var SearchController = function ($scope, $http){
	    $scope.next_offset = 0;
	    $scope.key = 'name'
	    $scope.param = 'batman'
		$scope.number_of_total_results = 0;    
    	$scope.results =[];
    	$scope.searchIssues = function(key, param) {
			var offset = $scope.next_offset;
    		searchIssuesCall(key, param, offset);
    	}
    	function setSearchResults(response){
    		$scope.next_offset = response.next_offset
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
    	function searchIssuesCall(key, param, offset){
    		$http({
    					method: 'GET',
    					//todo-update this and put in config file
  						url: 'http://ec2-52-41-67-194.us-west-2.compute.amazonaws.com:8080/issues',
  						params: {key: key, param : param, offset : offset}
				}).then(function successCallback(response) {
						//just get first for now
						setSearchResults(response.data);
		    			//otherwise it's been added		    		
			  }, function errorCallback(response) {
			    	alert("failed request with error" + response);
			  });
    	}
    	searchIssuesCall($scope.key, $scope.param, $scope.next_offset)
	}
	angularApp.controller("SearchController",["$scope","$http",SearchController])


}());