'use strict';

/* Controllers */

var contentControllers = angular.module('contentControllers', []);

contentControllers.controller('PageCtrl', ['$scope', '$http',
  function ($scope, $http) {

        $scope.init = function(){
            $scope.setLang('en');
        }
        $scope.setLang = function(lang){
            $http.get('lang/'+lang+'.json').success(function(data) {
                $scope.lang = data;
            });
        }

        $scope.init();
  } ]);