'use strict';

/* Controllers */

var contentControllers = angular.module('contentControllers', []);

contentControllers.controller('PageCtrl', ['$scope', '$http',
  function ($scope, $http) {
        $scope.lang = 'es';
  } ]);