/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
 {
	var angularApp = angular.module("MOTHERBOXX", ['ngRoute']);
	//Controller class for login functionality
	
	var modalDemo = function($scope, $rootScope) {
		$scope.leftVisible = false;
		$scope.rightVisible = false;

		$scope.close = function() {
			$scope.leftVisible = false;
			$scope.rightVisible = false;
		};

		$scope.showLeft = function(e) {
			console.log('test')
			$scope.leftVisible = true;
			e.stopPropagation();
		};

		$scope.showRight = function(e) {
			$scope.rightVisible = true;
			e.stopPropagation();
		}

		$rootScope.$on("documentClicked", _close);
		$rootScope.$on("escapePressed", _close);

		function _close() {
			$scope.$apply(function() {
				$scope.close(); 
			});
		}
	};

	angularApp.run(function($rootScope) {
		document.addEventListener("keyup", function(e) {
			if (e.keyCode === 27)
				$rootScope.$broadcast("escapePressed", e.target);
		});

		document.addEventListener("click", function(e) {
			$rootScope.$broadcast("documentClicked", e.target);
		});
	});

	var menu = function() {
		return {
			restrict: "E",
			template: "<div ng-class='{ show: visible, left: alignment === \"left\", right: alignment === \"right\" }' ng-transclude></div>",
			transclude: true,
			scope: {
				visible: "=",
				alignment: "@"
			}
		};
	};

	var menuItemDirective = function() {
		return {
			restrict: "E",
			template: "<div ng-click='navigate()' ng-transclude></div>",
			transclude: true,
			scope: {
				hash: "@"
			},
			link: function($scope) {
				$scope.navigate = function() {
					window.location.hash = $scope.hash;
				}
			}
		}
	};

	angularApp.controller("modalDemo",["$scope","$rootScope",modalDemo])
	angularApp.directive("menu",["$scope"],menu)
	angularApp.directive("menuItemDirective",["$scope",menuItemDirective])


}());