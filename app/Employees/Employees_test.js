'use strict';

describe('myApp.Employees module', function() {

  beforeEach(module('myApp.Employees'));

  describe('Employees controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var EmpCtrl = $controller('EmpCtrl');
      expect(EmpCtrl).toBeDefined();
    }));

  });
});
