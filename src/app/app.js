(function() {
  'use strict'



  var app = angular.module('app', ['ngMaterial','ngRoute','md.data.table']);


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

    app.config(['$mdThemingProvider', function ($mdThemingProvider) {
      'use strict';

      $mdThemingProvider.theme('default')
      .primaryPalette('blue');
    }])

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

  app.controller('DataController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.stuff = [
      {
        color: "red",
        value: "#f00"
      },
      {
        color: "green",
        value: "#0f0"
      },
      {
        color: "blue",
        value: "#00f"
      },
      {
        color: "cyan",
        value: "#0ff"
      },
      {
        color: "magenta",
        value: "#f0f"
      },
      {
        color: "yellow",
        value: "#ff0"
      },
      {
        color: "black",
        value: "#000"
      }
    ]


    $scope.selected = [];


    function success(stuff) {
      $scope.stuff = stuff;
    }

    $scope.getStuff = function () {
      $scope.promise = $timeone(function() { return stuff; }).$promise;//nutrition.desserts.get($scope.query, success).$promise;
    };

    $scope.loadStuff = function () {
  $scope.promise = $timeout(function () {
    // loading
  }, 2000);
}
  }]);


})();
