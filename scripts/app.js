'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('empleados', [
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'controller_main',
        controllerAs: 'main'
      })
      .when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'controller_edit',
        controllerAs: 'edit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL',
    'https://practicaempresa-c2916.firebaseio.com/empleados/'
  );
