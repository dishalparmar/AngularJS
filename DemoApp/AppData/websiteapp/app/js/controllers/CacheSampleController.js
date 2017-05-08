'use strict';

eventsApp.controller('CacheSampleController',
	
	function CacheSampleController($scope, myCache, $parse){
		
		$scope.addToCache = function(key, value){
			myCache.put(key, value);
		};
	
		$scope.readFromCache = function(key){
			return myCache.get(key);
		};
		$scope.getCacheStats = function(){
			return myCache.info();
		};
	
	
	var fn=$parse('1+2');
	var getter=$parse('event.name');
	
	
	var context1 = {event: {name: 'Dish is best'}};
	var context2 = {event: {name: 'Dish is the best'}};
	
	console.log(getter(context1));
	console.log(getter(context2));
	console.log(fn());
	}
					 
);