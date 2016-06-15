var myApp = angular.module('flapperNews');

myApp.controller('PortfolioCtrl', ['$scope', '$http', function($scope, $http){
  $scope.test = 'Simple Portfolio Website';

   $scope.profiles = [
    {
      name:'김지수',
      intro:'안녕하세요',
      mainImageLink:'images/profile1.jpg',
      property:'배우'
    },
    {
      name:'임혜리',
      intro:'안녕하세요',
      mainImageLink:'images/profile2.jpg',
      property:'배우'
    },
    {
      name:'케니스 최',
      intro:'안녕하세요',
      mainImageLink:'images/profile4.jpg',
      property:'배우'
    }
  ];
}]);
