var myApp = angular.module('flapperNews', ['ui.router', 'templates', 'Devise', 'youtube-embed']);

myApp.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'portfolio/_portfolio.html',
      controller: 'PortfolioCtrl',
      resolve: { postPromise: ['posts', function(posts){
                return posts.getAll();
              }]}
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'portfolio/_portfolio.html',
      controller: 'PortfolioCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'profile/_profile.html',
      controller: 'ProfileCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'contact/_contact.html',
      controller: 'ContactCtrl'
    })
    .state('recruit', {
      url: '/recruit',
      templateUrl: 'recruit/_recruit.html',
      controller: 'RecruitCtrl',
      resolve: { recruitPromise: ['recruitService', function(recruitService){
                return recruitService.getAll();
              }]}
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl',
      // Angular ui-router detects we are entering the posts state and will
      // automatically query the server for the full post object,
      // including comments. Only after the request has returned will the
      // state finish loading.
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      // redirect unauthenticated users
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      // redirect unauthenticated users
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('details', {
      url: '/details',
      templateUrl: 'details/_details.html',
      controller: 'DetailCtrl'
    })
    .state('jisu', {
      url: '/jisu',
      templateUrl: 'jisu/_jisu.html',
      controller: 'JisuCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);
