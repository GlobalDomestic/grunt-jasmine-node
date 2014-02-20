'use strict';

var Calculator = function Calculator() {
  return {
    add: function add(firstNum, secondNum) {
      return firstNum + secondNum;
    }
  };
};

describe('Calculator', function () {
  var calculator;

  beforeEach(function (){
    calculator = new Calculator();
  });

  describe('add()', function () {
    it('adds two numbers together', function () {
      expect( calculator.add(2, 6) ).toEqual(8);
    });
    it('adds two numbers together', function () {
      expect( calculator.add(3, 6) ).toEqual(9);
    });
  });
});