var myApp = angular.module('flapperNews');

myApp.controller('ContactCtrl', ['$scope', 'recruitService', function($scope,recruitService){
  console.log('ContactCtrl');

  $scope.addRecruit = function(){
    if(!$scope.title || $scope.title === '') { return; }
    
    recruitService.create({
      title: $scope.title,
      email: $scope.email,
      content: $scope.content
    });
    $scope.title = '';
    $scope.email = '';
    $scope.content = '';
    console.log('addRecruit');
  }; // addRecruit



}]);
