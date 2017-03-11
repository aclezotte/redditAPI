var app = angular.module("redditApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/userinput", {
            controller: "inputCtrl",
            templateUrl: "view/searchpage.html"
        })
        .when("/viewsubreddit", {
            controller: "viewCtrl",
            templateUrl: "view/displaypaage.html"
        });

    $locationProvider.hashPrefix("");

});
