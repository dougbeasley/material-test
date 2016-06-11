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

  app.controller('DataController', ['$scope', '$timeout', '$mdEditDialog', '$mdDialog', function($scope, $timeout, $mdEditDialog, $mdDialog) {

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
    ];

    $scope.addColor = function(event) {
      $mdDialog.show({  clickOutsideToClose: true,
        controller: 'addColorController',
        controllerAs: 'ctrl',
        focusOnOpen: false,
        targetEvent: event,
        templateUrl: 'add-color-dialog.html',
      }).then($scope.getStuff);
    };


    $scope.editComment = function (event, item) {
      // if auto selection is enabled you will want to stop the event
      // from propagating and selecting the row
      event.stopPropagation();

      /*
       * messages is commented out because there is a bug currently
       * with ngRepeat and ngMessages were the messages are always
       * displayed even if the error property on the ngModelController
       * is not set, I've included it anyway so you get the idea
       */

      var promise = $mdEditDialog.small({
        // messages: {
        //   test: 'I don\'t like tests!'
        // },
        modelValue: item.value,
        placeholder: 'New value',
        save: function (input) {
          item.value = input.$modelValue;
        },
        targetEvent: event,
        validators: {
          'md-maxlength': 30
        }
      });

      promise.then(function (ctrl) {
        var input = ctrl.getInput();

        input.$viewChangeListeners.push(function () {
          input.$setValidity('test', input.$modelValue !== 'test');
        });
      });
    };

    $scope.selected = [];


    function success(stuff) {
      $scope.stuff = stuff;
    }

    $scope.getStuff = function () {
      $scope.promise = $timeout(function() { return $scope.stuff; }).$promise;
    };

    $scope.loadStuff = function () {
  $scope.promise = $timeout(function () {
    // loading
  }, 2000);
}
  }]);


})();
