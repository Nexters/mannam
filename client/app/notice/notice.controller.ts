'use strict';

angular.module('mannamApp')
.config(function($stateProvider) {
  $stateProvider
    .state('notice', {
      url: '/notice',
      templateUrl: 'app/notice/notice.html',
      controller: 'NoticeController'
    });
});
