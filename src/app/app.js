(function() {
  'use strict'



  var app = angular.module('app', ['ngMaterial','ngRoute']);


  app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/one', {
    templateUrl: 'one.html',
    controller: 'SimpleController'
  })
  .when('/two', {
    templateUrl: 'two.html',
    controller: 'DataController'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});

  app.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

    $scope.toggleNav = function() {
      $mdSidenav('left').toggle();
    };

    $scope.setFocus = function() {
      $mdSidenav('left').close();
    }

  }]);

  app.controller('SimpleController', function() {

  });

  app.controller('DataController', function() {

  });


})();
