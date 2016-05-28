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
        }

        $scope.init();
  } ]);

  contentControllers.controller('CMSCtrl', ['$scope', '$http', '$routeParams', '$sce',
    function ($scope, $http, $routeParams,$sce) {
        $http.get('lang/'+$routeParams.lang+'/'+$routeParams.page+'.json').success(function(data) {
            $scope.content = data;
            $scope.view = 'views/'+$routeParams.page+'.html';
        });
    } ]);


