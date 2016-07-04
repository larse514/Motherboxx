var app = angular.module('MOTHERBOXX');


app.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
    	console.log('butthole')
        var raw = elm[0];
        
        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});