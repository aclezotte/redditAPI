var app = angular.module("redditApp");  //get module

app.controller("viewCtrl", function($scope, redditFactory) {    //create controller for viewsubreddit view and inject $scope and factory

    $scope.jsonInfo = redditFactory.giveItBack();   //save results of factory ajax call in object

    console.log($scope.jsonInfo);

});
