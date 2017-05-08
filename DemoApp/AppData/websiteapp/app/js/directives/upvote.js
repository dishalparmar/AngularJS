'use strict';

eventsApp.directive('upvote', function () {


    return {
        restrict: 'E',
        replace: true,
        templateUrl: "/templates/directives/upvote.html",
        scope: {
            
            //just use $ becuase it matches the upvote="upVoteSession(session)" downvote="downVoteSession(session)" count="session.upVoteCount"
            upvote: "&",
            downvote: "&",
            count: "="
            

        }
    };
});