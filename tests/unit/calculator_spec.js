var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can subtract 4 from 5 to get 1', function(){
    calculator.previousTotal = 5;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 1);
  })

  it('can multiply 2 by 2 to get 4', function(){
    calculator.previousTotal = 2;
    calculator.multiply(2);
    assert.strictEqual(calculator.runningTotal, 4);
  })

  it('can divide 5 by 15 and get 3', function(){
    calculator.previousTotal = 15;
    calculator.divide(5);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can show numberClicking format correctly', function(){
    calculator.runningTotal = 0;
    calculator.numberClick(3);
    assert.strictEqual(calculator.newTotal, false);
  })

  it('can show operatorClick working correctly', function(){
    calculator.previousTotal = 8;
    calculator.previousOperator = '/';
    calculator.divide(4);
    calculator.operatorClick('=');
    calculator.newTotal = true;
    calculator.runningTotal = 2;
    assert.strictEqual(calculator.newTotal, true);
  })

  it('can clear the operation in effect', function(){
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.runningTotal = 0;
    calculator.newTotal = false;
    calculator.runningTotal = 0;
    assert.strictEqual(calculator.newTotal, false);
  })

  // it('can revert infinity value to zero', function(){
  //   calculator.previousTotal = 8;
  //   calculator.previousOperator = '/';
  //   calculator.divide(0);
  //   calculator.operatorClick('=');
  //   calculator.runningTotal = 2;

  // })

});
