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
            $http.get('lang/'+lang+'/menu.json').success(function(data) {
                $scope.menu = data;
            });

            $rootScope.$emit("CallSetLang", {currentLang:lang});
        }

        $scope.init();
  } ]);

  contentControllers.controller('CMSCtrl', ['$scope', '$http', '$routeParams', '$rootScope', '$sce',
    function ($scope, $http, $routeParams, $rootScope, $sce) {

        $scope.init = function(lang){
            $scope.setLang(lang);
        }

        $scope.setLang = function(lang){
            $rootScope.lang = lang;
            $http.get('lang/'+lang+'/'+$routeParams.page+'.json').success(function(data) {
                $scope.content = data;
                $scope.view = 'views/'+$routeParams.page+'.html';
            });
        }

        $rootScope.$on("CallSetLang", function(event, args){
             $scope.setLang(args.currentLang);
        });

        $scope.init($routeParams.lang);
    } ]);


