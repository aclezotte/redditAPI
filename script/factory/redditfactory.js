var app = angular.module("redditApp");  //get module

app.factory("redditFactory", function($http) {  //create factory and inject $http

    var jsonObject = {};    //empty object to hold results of json call

    return {
        giveItToUs: function(subreddit) {   //makes $http call to user-chosen subreddit
            var promise = $http({
                method: "GET",
                url: "https://www.reddit.com/r/" + subreddit + ".json"
            }).then(function successCallback(response) {
                console.log(response);
                jsonObject = response;  //if successful, save response of request to jsonObject
            });

            return promise;
        },
        giveItBack: function() {    //return the object to the controller
            return jsonObject;
        }
    };
});
