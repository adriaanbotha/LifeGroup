'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('lifeGroup'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();
    expect(scope.awesomeThings).count > 5;

    $controller('MainCtrl', {
      $scope: scope
  	});

    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
    expect(scope.awesomeThings.length > 5).toBeTruthy();
  }));
});
