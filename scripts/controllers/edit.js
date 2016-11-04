'use strict';

/**
 * @ngdoc function
 * @name ang ularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('empleados')
    .controller('controller_edit', [ '$scope', '$window', '$location', '$routeParams', '$firebaseObject', 'FBURL',
     function($scope, $window, $location, $routeParams, $firebaseObject, FBURL) {

      var ref = new Firebase(FBURL + $routeParams.id);
      $scope.empleado = $firebaseObject(ref);
      
      $scope.onTextClick = function ($event) {
          $event.target.select();
      };

      $scope.editarEmpleado = function() {

        $scope.empleado.$save().then(function(ref) {
          console.log("Exito");
        }, function(error){
          console.log("Error: ", error);
        });

        $scope.edit_form.$setPristine();
        $scope.empleado = {};
        $location.path('/empleados');
      };
  }])