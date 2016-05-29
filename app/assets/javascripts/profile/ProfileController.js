var myApp = angular.module('flapperNews');

myApp.controller('ProfileCtrl', ['$scope', function($scope){
  console.log('ProfileCtrl');
  $scope.link = 'https://youtu.be/OXWrjWDQh7Q';
  $scope.careers = [
    {
      name:'One Republic - Wherever I Go (MV)',
      content:'Starred as main character in the music video Wherever I Go. Great experience!',
      link:'https://youtu.be/OXWrjWDQh7Q',
    },
    {
      name:'Satellites - Alpha (live)',
      content:'Great band from seoul. I once played guitar in a band Satellites',
      link:'https://youtu.be/XyZbvScyTsw',
    }
  ];

}]);
