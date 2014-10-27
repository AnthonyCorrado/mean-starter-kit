angular.module('PatronService', []).factory('Patron', ['$http', function($http) {

	return {
		// call to get all patrons
		get: function() {
			return $http.get('/api/patrons');
		},

		create: function(patronData) {
			return $http.post('/api/patrons', patronData);
		},

		delete: function(id) {
			return $http.delete('api/patrons/' + id);
		}
	};
}]);