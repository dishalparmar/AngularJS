'use strict';

eventsApp.directive('datePicker', function () {

    return {
        restrict: 'A', // Attribute
        link: function (scope, element) {

            element.datepicker();
        }

    }

});