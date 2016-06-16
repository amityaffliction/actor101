var myApp = angular.module('flapperNews');

myApp.controller('JisuCtrl', ['$scope', function($scope){
  console.log('JisuCtrl');
  $scope.link = 'https://youtu.be/Ikoth9mXq9E';
  $scope.careers = [
    {
      name:'에픽하이 - 스포일러(MV)',
      content:'에픽하이 선배님들의 스포일러 뮤비에 여주인공으로 나왔어요',
      link:'https://youtu.be/Ikoth9mXq9E',
    },
    {
      name:'Nikon CF 모델',
      content:'니콘 카메라 CF에 모델로 나왔어요',
      link:'https://youtu.be/-J1mr92UFrc',
    },
    {
      name:'Samsonite CF 모델',
      content:'이민호씨랑 Samsonite CF에 모델로 나왔어요',
      link:'https://youtu.be/HxQclbx8YJA',
    }
  ];

}]);
