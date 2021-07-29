const Calculator = require("./Calculator");

class ArabicCalculator extends Calculator {
  calc(a, b, operator) {
    this.operator = operator;
    return this.getResult(a, b);
  }
}

module.exports = new ArabicCalculator();
