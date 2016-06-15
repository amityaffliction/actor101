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
    },
    {
      name:'audrey hepburn',
      intro:'Hi!',
      mainImageLink:'images/profile5.jpg',
      property:'Actress'
    },
    {
      name:'Kei kim',
      intro:'Ah Choo!',
      mainImageLink:'images/kei.jpg',
      property:'Singer'
    },
    {
      name:'Chugha Kim',
      intro:'Give me some!',
      mainImageLink:'images/chungha.jpg',
      property:'Singer & Dancer'
    },
    {
      name:'Yujung choi',
      intro:'Ggul ggeok~',
      mainImageLink:'images/yujung.jpg',
      property:'Singer'
    },
    {
      name:'Sejung Kim',
      intro:'Sense',
      mainImageLink:'images/Sejung.jpg',
      property:'Singer'
    },
    {
      name:'Sohye Kim',
      intro:'Penguin',
      mainImageLink:'images/sohye.jpg',
      property:'Actress'
    },
    {
      name:'Chaeyeon Jung',
      intro:'Dia',
      mainImageLink:'images/chaeyeon.jpg',
      property:'Singer'
    },
    {
      name:'Doyeun Jung',
      intro:'Daughter of Kangwon',
      mainImageLink:'images/doyeun.jpg',
      property:'Singer'
    },
    {
      name:'Nayoung Lim',
      intro:'Stone',
      mainImageLink:'images/na0.jpg',
      property:'Singer'
    }
   ];
}]);
