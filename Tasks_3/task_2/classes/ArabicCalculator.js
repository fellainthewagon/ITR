const Calculator = require("./Calculator");

class ArabicCalculator extends Calculator {
  calc(a, b, operator) {
    try {
      this.operator = operator;
      return this.getResult(a, b);
    } catch (error) {
      return { error: error.message, result: error.result };
    }
  }
}

module.exports = new ArabicCalculator();
