'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource','ngRoute'])
	
	.config(function($routeProvider, $locationProvider){
	
		$routeProvider.when('/NewEvent',
		
		{
			templateUrl:'templates/NewEvent.html',
			controller: 'EditEventController'
		});

		$routeProvider.when('/Events',
		
		{
			templateUrl:'templates/EventList.html',
			controller: 'EventListController'
		});		

		$routeProvider.when('/Event/:eventid',
		
		{
			templateUrl:'templates/EventDetails.html',
			controller: 'EventController'
		});

		$routeProvider.when('/EditProfile',

        {
            templateUrl: 'templates/EditProfile.html',
            controller: 'EditProfileController'
        });

		$routeProvider.otherwise("/Events");
		$locationProvider.html5Mode(true); //This removes the # signs in the URL
	});
