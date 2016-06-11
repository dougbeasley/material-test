(function() {
'use strict'


var app = angular.module('app');

app.controller('addColorController',['$mdDialog', function($mdDialog) {

  this.closeDialog = function() {
    $mdDialog.hide();
  }



}]);


})();
