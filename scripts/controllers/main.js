'use strict';

/**
 * @ngdoc function
 * @name ang ularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('empleados')
  	.controller('controller_main', [ '$scope', '$window', '$firebaseArray', '$firebaseObject', '$location', 'FBURL', function($scope, $window, $firebaseArray, $firebaseObject, $location, FBURL) {
  		var refEmp = new Firebase(FBURL);
  		$scope.empleadosdata = $firebaseArray(refEmp);

  		$scope.nuevoEmpleado = function() {
  			var ref = new Firebase(FBURL);
  			var data = $firebaseArray(ref);

  			data.$add({
  				nombre: $scope.emp.nombre,
  				puesto: $scope.emp.puesto,
  				departamento: $scope.emp.departamento,
  				sueldo: $scope.emp.salario,
          fecha: $scope.emp.fecha
  			}).then(function(ref) {
  				$scope.emp.nombre = '';
  				$scope.emp.puesto = '';
  				$scope.emp.departamento = '';
  				$scope.emp.salario = '';
          $scope.emp.fecha = '';
  				$scope.jsonFile = {};
  				$window.alert('Datos guardados');
  			})
  			.catch(function(error){
  				$window.alert(error);
  			});
  			$location.path('/');
  		};

  		$scope.eliminaEmpleado = function(id) {
  			var ref = new Firebase(FBURL + id);
  			var empleados = $firebaseObject(ref);

  			empleados.$remove();
  		};
  }])
