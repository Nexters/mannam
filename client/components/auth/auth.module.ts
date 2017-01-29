'use strict';

angular.module('mannamApp.auth', [
  'mannamApp.constants',
  'mannamApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
