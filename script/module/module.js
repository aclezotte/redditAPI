var app = angular.module("redditApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/userInput", {
            controller: "inputCtrl",
            templateUrl: "view/searchPage.html"
        })
        .when("/viewSubreddit", {
            controller: "viewCtrl",
            templateUrl: "view/displayPage.html"
        });

    $locationProvider.hashPrefix("");

});
