'use strict';

describe('Controller: NoticeCtrl', function () {

  // load the controller's module
  beforeEach(module('mannamApp.notice'));

  var NoticeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoticeCtrl = $controller('NoticeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
