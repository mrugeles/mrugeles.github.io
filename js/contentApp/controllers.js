'use strict';

/* Controllers */

var contentControllers = angular.module('contentControllers', []);

contentControllers.controller('NavCtrl', ['$scope', '$http', '$location', '$rootScope',
  function ($scope, $http, $location, $rootScope) {
        $scope.currentContent = $location.url().replace('/', '');
        $scope.init = function(){
            $scope.setLang('en');
        }
        $scope.setLang = function(lang){
            $http.get('lang/'+lang+'/menu.json').success(function(data) {
                $scope.menu = data;
            });
            $http.get('lang/'+lang+'/'+$scope.currentContent+'.json').success(function(data) {
                $rootScope.content = data;
            });
        }

        $scope.init();
  } ]);

  contentControllers.controller('HomeCtrl', ['$scope', '$http',
    function ($scope, $http) {

    } ]);
  contentControllers.controller('AcdaCtrl', ['$scope', '$http',
    function ($scope, $http) {

    } ]);
  contentControllers.controller('PortfolioCtrl', ['$scope', '$http',
    function ($scope, $http) {

    } ]);
  contentControllers.controller('BassCtrl', ['$scope', '$http',
    function ($scope, $http) {

    } ]);
  contentControllers.controller('ContactCtrl', ['$scope', '$http',
    function ($scope, $http) {

    } ]);
