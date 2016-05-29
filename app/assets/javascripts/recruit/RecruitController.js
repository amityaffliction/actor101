var myApp = angular.module('flapperNews');

myApp.controller('RecruitCtrl', ['$scope', 'recruitService', function($scope, recruitService){
  console.log('RecruitCtrl');

  $scope.recruits = recruitService.recruits;

}]);