'use strict';

describe('Controller: CtrlFiltersCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var CtrlFiltersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CtrlFiltersCtrl = $controller('CtrlFiltersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
