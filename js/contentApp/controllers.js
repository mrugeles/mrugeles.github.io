'use strict';

/* Controllers */

var contentControllers = angular.module('contentControllers', []);

contentControllers.controller('NavCtrl', ['$scope', '$http', '$location', '$rootScope',
  function ($scope, $http, $location, $rootScope) {
        $scope.init = function(){
            $scope.setLang('en');
        }
        $scope.setLang = function(lang){
            $scope.currentContent = $location.url().replace('/', '');
            $rootScope.lang = lang;
            $http.get('lang/'+lang+'/menu.json').success(function(data) {
                $scope.menu = data;
            });
            $http.get('lang/'+lang+'/'+$scope.currentContent+'.json').success(function(data) {
                $rootScope.content = data;
            });
        }

        $scope.init();
  } ]);

  contentControllers.controller('HomeCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {

    } ]);
  contentControllers.controller('AcdaCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {
        $http.get('lang/'+$rootScope.lang+'/acda.json').success(function(data) {
            $rootScope.content = data;
        });

    } ]);
  contentControllers.controller('PortfolioCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {

    } ]);
  contentControllers.controller('BassCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {

    } ]);
  contentControllers.controller('ContactCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {

    } ]);
