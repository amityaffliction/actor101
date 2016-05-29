var myApp = angular.module('flapperNews');

myApp.factory('recruitService', ['$http', function($http) {
  var o = {
    recruits: []
  };
 
  // Get all Recruit list from server
  o.getAll = function() {
    return $http.get('/recruits.json').success(function(data){
      angular.copy(data, o.recruits);
    });
  };


  o.create = function(post) {
    console.log('Recruit Create');
    return $http.post('/recruits.json', post).success(function(data){
      o.recruits.push(data);
    });
  };

  return o;
}]);
