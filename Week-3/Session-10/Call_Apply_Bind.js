// Calculator class
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero";
    }
  }
}

// ScientificCalculator class extending Calculator
class ScientificCalculator extends Calculator {
  square(a) {
    return a * a;
  }

  cube(a) {
    return a * a * a;
  }

  power(a, b) {
    return Math.pow(a, b);
  }
}

// Create an instance of ScientificCalculator
const scientificCalc = new ScientificCalculator();

// Using "call" method to invoke "add" method of Calculator class
const addResult = Calculator.prototype.add.call(scientificCalc, 10, 5);
console.log("Result of adding 10 and 5:", addResult);

// Using "apply" method to invoke "subtract" method of Calculator class
const subtractResult = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
console.log("Result of subtracting 5 from 10:", subtractResult);

// Using "bind" method to create "multiplyByTwo" method and bind it to scientificCalc instance
const multiplyByTwo = scientificCalc.multiply.bind(scientificCalc, 2);
const multiplyByTwoResult = multiplyByTwo(5);
console.log("Result of multiplying 5 by 2:", multiplyByTwoResult);

// Using "bind" method to create "powerOfThree" method and bind it to scientificCalc instance
const powerOfThree = scientificCalc.power.bind(scientificCalc, 3);
const powerOfThreeResult = powerOfThree(2);
console.log("Result of raising 2 to the power of 3:", powerOfThreeResult);
