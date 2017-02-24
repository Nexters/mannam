'use strict';

angular.module('mannamApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('write', {
        url: '/write',
        templateUrl: 'app/write/write.html',
        controller: 'WriteController',
        controllerAs: 'vm'
      });
  })
