'use strict';

eventsApp.directive('collapsible', function () {

    return {

        restrict: 'E',
        replace: true,
        template: '<div><h4 class="well-title" ng-click="toggleShow()">{{title}}</h4><div ng-show="show" ng-transclude></div></div>',
        controller: function($scope){
            $scope.show = true;

            $scope.toggleShow = function () {
                $scope.show = !$scope.show;
            }
        },

        transclude: true, //shows everyting inside <collapsible> also needs ng-transclude div above
        scope: {
                title: '@'
        }

    }

});