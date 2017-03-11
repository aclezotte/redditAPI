var app = angular.module("redditApp", ["ngRoute"]); //create module

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/userinput", {   ////bind userinput view to inputCtrl controller and searchpage html file
            controller: "inputCtrl",
            templateUrl: "view/searchpage.html"
        })
        .when("/viewsubreddit", {   //bind viewsubreddit view to viewCtrl controller and displaypage html file
            controller: "viewCtrl",
            templateUrl: "view/displaypage.html"
        });

    $locationProvider.hashPrefix("");   //eliminate ! after #

});
