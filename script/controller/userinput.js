var app = angular.module("redditApp");  //get redditApp module

app.controller("inputCtrl", function($scope, $location, redditFactory) { //create inputCtrl controller and inject $scope and factory

    $scope.sendName = function(subName) {   //create sendName function that takes the name received from searchpage and sends it tof actory

        console.log(subName);

        redditFactory.giveItToUs(subName);  //call factory function with name from view

        $location.path("/viewsubreddit");

    };

});
