(function () {
'use strict';

angular.module('myCalculator', [])

.controller('NameCalculatorController', function($scope) {
  $scope.name ="";
  $scope.totalValue = 0;


  $scope.displayNumberic = function() {
    var totalNameValue = calculateNumbericForString($scope.name);
    $scope.totalValue = totalNameValue;

  };

  function calculateNumbericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

});




})();
