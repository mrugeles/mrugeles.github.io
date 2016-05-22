'use strict';

var contentApp = angular.module('contentApp', [
    'ngSanitize',
    'btford.markdown',
    'ngRoute',
    'contentControllers'
]);

contentApp.run(['$rootScope', function($rootScope){
    $rootScope.content = null;
}]);

contentApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider.
        when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        }).
        when('/acda', {
          templateUrl: 'views/acda.html',
          controller: 'AcdaCtrl'
        }).
        when('/portfolio', {
          templateUrl: 'views/portfolio.html',
          controller: 'PortfolioCtrl'
        }).
        when('/bass', {
          templateUrl: 'views/bass.html',
          controller: 'BassCtrl'
        }).
        when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });
  } ]);