var myApp = angular.module('flapperNews');

myApp.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  console.log('MainCtrl');
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
      name:'김부장',
      intro:'안녕하세요',
      mainImageLink:'images/profile3.jpg',
      property:'배우'
    }
  ];

}]);
