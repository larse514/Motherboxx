/**
 * Created by andrew.larsen on 1/22/2016.
 */
(function()
 {
    var angularApp = angular.module("MOTHERBOXX", ['ngRoute']);
    //Controller class for login functionality
    var SearchController = function ($scope, $http ){
        $scope.next_offset = 0;
        $scope.key = ''
        $scope.param = ''
        $scope.number_of_total_results = 0;    
        $scope.results =[];
        $scope.keys=[];
             
        window.onscroll = angular.bind(this, function(){
            if ($(window).scrollTop() >= $('#test').offset().top + $('#test').outerHeight() - window.innerHeight) {
                searchIssuesCall($scope.key, $scope.param, $scope.next_offset, addIssues)
            }
        });
        $scope.loadMore = function() {
            searchIssuesCall(key, param, next_offset, addIssues);

        };
        $scope.searchIssues = function(key, param) {
            var offset = $scope.next_offset;
            searchIssuesCall(key, param, offset, setSearchResults);
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
        function searchIssuesCall(key, param, offset, next){
            $http({
                        method: 'GET',
                        //todo-update this and put in config file
                        url: 'http://ec2-52-41-67-194.us-west-2.compute.amazonaws.com:8080/issues',
                        params: {key: key, param : param, offset : offset}
                }).then(function successCallback(response) {
                        //just get first for now
                        next(response.data);
                        //otherwise it's been added                 
              }, function errorCallback(response) {
                    alert("failed request with error" + response);
              });
                //uncomment this when testing until redis cache is setup
              //next({"data":{"offset":0,"next_offset":3,"number_of_total_results":488544,"results":[{"cover_date":"2051-05-23","description":null,"id":386024,"image":{"icon_url":"http://static1.comicvine.com/uploads/square_avatar/2/27783/2865092-ew_1.jpg","medium_url":"http://static2.comicvine.com/uploads/scale_medium/2/27783/2865092-ew_1.jpg","screen_url":"http://static3.comicvine.com/uploads/screen_medium/2/27783/2865092-ew_1.jpg","small_url":"http://static4.comicvine.com/uploads/scale_small/2/27783/2865092-ew_1.jpg","super_url":"http://static5.comicvine.com/uploads/scale_large/2/27783/2865092-ew_1.jpg","thumb_url":"http://static6.comicvine.com/uploads/scale_avatar/2/27783/2865092-ew_1.jpg","tiny_url":"http://static7.comicvine.com/uploads/square_mini/2/27783/2865092-ew_1.jpg"},"issue_number":"1","name":"When the Gangs come to London","volume":{"api_detail_url":"http://www.comicvine.gamespot.com/api/volume/4050-57146/","id":57146,"name":"Edgar Wallace Comic","site_detail_url":"http://comicvine.gamespot.com/edgar-wallace-comic/4050-57146/"}},{"cover_date":"2023-06-05","description":"<p><em>Shocked to find that his childhood friend, Toshio is in a relationship with his older brother, Sumi, Kyu is determined to win Toshio over for himself. Kyu finds the perfect plan to seduce Toshio by studying for their college entrance exams together. But his planned seduction goes awry when he fails his exam while Toshio passes his. Hitting two birds with one stone is Kyu's plan as he's given a second chance to pass his college exam and his continued determination to make Toshio fall for him grows. However, things don't go as planned when Toshio starts avoiding him and Sumi reappears in Toshio's life. How will Kyu handle the return of his brother into Toshio's life? And will Toshio ever come to terms with his feelings for Kyu?</em></p>","id":409326,"image":{"icon_url":"http://static8.comicvine.com/uploads/square_avatar/6/67663/3090140-01.jpg","medium_url":"http://static9.comicvine.com/uploads/scale_medium/6/67663/3090140-01.jpg","screen_url":"http://static1.comicvine.com/uploads/screen_medium/6/67663/3090140-01.jpg","small_url":"http://static2.comicvine.com/uploads/scale_small/6/67663/3090140-01.jpg","super_url":"http://static3.comicvine.com/uploads/scale_large/6/67663/3090140-01.jpg","thumb_url":"http://static4.comicvine.com/uploads/scale_avatar/6/67663/3090140-01.jpg","tiny_url":"http://static5.comicvine.com/uploads/square_mini/6/67663/3090140-01.jpg"},"issue_number":"1","name":"Vol. 1","volume":{"api_detail_url":"http://www.comicvine.gamespot.com/api/volume/4050-62984/","id":62984,"name":"Clumsy Child","site_detail_url":"http://comicvine.gamespot.com/clumsy-child/4050-62984/"}},{"cover_date":"2016-12-31","description":null,"id":537732,"image":{"icon_url":"http://static6.comicvine.com/uploads/square_avatar/0/3125/5288965-coc1.jpg","medium_url":"http://static7.comicvine.com/uploads/scale_medium/0/3125/5288965-coc1.jpg","screen_url":"http://static8.comicvine.com/uploads/screen_medium/0/3125/5288965-coc1.jpg","small_url":"http://static9.comicvine.com/uploads/scale_small/0/3125/5288965-coc1.jpg","super_url":"http://static1.comicvine.com/uploads/scale_large/0/3125/5288965-coc1.jpg","thumb_url":"http://static2.comicvine.com/uploads/scale_avatar/0/3125/5288965-coc1.jpg","tiny_url":"http://static3.comicvine.com/uploads/square_mini/0/3125/5288965-coc1.jpg"},"issue_number":"1","name":null,"volume":{"api_detail_url":"http://www.comicvine.gamespot.com/api/volume/4050-91846/","id":91846,"name":"Cocytus","site_detail_url":"http://comicvine.gamespot.com/cocytus/4050-91846/"}}]}})
        }

        function setKeys(){
            //todo- set these dynamically
            $scope.keys = ['name', 'author'];
        }
        function init(){
            searchIssuesCall($scope.key, $scope.param, $scope.next_offset, setSearchResults)
            setKeys()
        }

        init()

    }
    angularApp.controller("SearchController",["$scope","$http", SearchController])


}());