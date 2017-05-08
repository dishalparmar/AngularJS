'use strict';

eventsApp.factory('eventData', function($resource){ //eventData is the service
	
    var resource = $resource('/data/event/:id', { id: '@id' });
	return {
		
		getEvent: function(eventid){
			
		return resource.get({id:eventid});	
			
		},
		save: function (event){
			
			event.id = 5;
			return resource.save(event);
		},
		getAllEvents: function(){
			return resource.query();
		
	}
			
			
/*return $resource('/data/event/:id', {id:'@id'}).get({id:1});*/	
			
/*				
			return $http({method: 'GET', url: '/data/event/1'});
			
		
			.success(function(data, status, headers, config) {
				successcallback(data);
			}).
			
			error(function(data, status, headers, config){
				$log.warn(data, status, headers, config);
				
			});
*/
			
				
			
		
		
	};
	
});