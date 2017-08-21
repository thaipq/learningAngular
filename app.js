(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController',function ($scope) {
  $scope.name = "Thai Pham";
  $scope.getTitle = function() {
    return "Thai is learning AngularJS";
  };

});



})();
