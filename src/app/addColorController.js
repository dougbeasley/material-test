(function() {
'use strict'


var app = angular.module('app');

app.controller('addColorController',['$scope', '$mdDialog', '$log', function($scope, $mdDialog, $log) {

  this.cancel = $mdDialog.cancel;

  function success(user) {
    $mdDialog.hide(user);
  };

  this.addItem = function() {
    $scope.user.form.$setSubmitted();

    if($scope.user.form.$valid) {
      $log.info($scope.user);
    }
  };


}]);


})();
