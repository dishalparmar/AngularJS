"use strict";

eventsApp.controller('EventController',
				   
				   
function EventController($scope, eventData, $routeParams, $route){
	
	//$scope.myStyle={color:'red'};
	$scope.btnDisabled=true;
	$scope.sortOrder='name';

	console.log($route.current.pathParams.eventid);

	eventData.getEvent($routeParams.eventid)
		.$promise
		.then(
			function(event){$scope.event = event; console.log (event); }
			)
		.catch(	
			function(response) {console.log(response); }	
			);
	
	
	/*$scope.event = eventData.getEvent();*/
	
/*		.success(function(event){
		$scope.event = event;
	})
	
		.error(function(data, status, headers, config){
				$log.warn(data, status, headers, config);
			});	
	*/
/*	eventData.getEvent(function (event) {
		$scope.event = event;
	});*/
	
	$scope.upVoteSession = function(session){
		
		session.upVoteCount++;
	};
	$scope.downVoteSession = function(session){
		
		session.upVoteCount--;
	};
	
}				   
				   
);