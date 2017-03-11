var app = angular.module("redditApp");

app.factory("redditFactory", function($http) {

    var jsonObject = {};

    return {
        giveItToUs: function(subreddit) {
            var promise = $http({
                method: "GET",
                url: "https://www.reddit.com/r/" + subreddit + ".json"
            }).then(function successCallback(response) {
                console.log(response);
                jsonObject = response;
            });

            return promise;
        },
        giveItBack: function() {
            return jsonObject;
        }
    };
});
