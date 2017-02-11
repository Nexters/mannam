'use strict';

angular.module('mannamApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('notice', {
        url: '/notice',
        template: '<notice></notice>'
      });
  });
