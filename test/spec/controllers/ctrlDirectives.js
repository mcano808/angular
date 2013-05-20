'use strict';

describe('Controller: CtrlDirectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var CtrlDirectivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CtrlDirectivesCtrl = $controller('CtrlDirectivesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
