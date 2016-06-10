(function() {
'use strict'



  var app = angular.module('app', ['ngMaterial']);



app.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

  $scope.toggleNav = function() {
    $mdSidenav('left').toggle();
  };


}]);


})();
