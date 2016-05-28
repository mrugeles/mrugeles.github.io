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
        when('/:lang/:page', {
          templateUrl: 'views/content.html',
          controller: 'CMSCtrl'
        }).
        otherwise({
          redirectTo: '/en/home'
        });
  } ]);