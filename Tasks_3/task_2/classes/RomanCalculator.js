const Calculator = require("./Calculator");
const CalculatorError = require("./error/CalculatorError");

class RomanCalculator extends Calculator {
  calc(a, b, operator) {
    try {
      this.operator = operator;
      const result = this.getResult(a, b);
      if (result <= 0) {
        throw new CalculatorError("The result is a negative or zero!", result);
      } else if (result >= 3999) {
        throw new CalculatorError("The result is more than 3999!", result);
      }

      const arrayNums = String(result).split("");
      return this.#getRomanResult(arrayNums);
    } catch (error) {
      return { error: error.message, result: error.result };
    }
  }

  #getRomanResult(arrayNums) {
    let arrayRom = [];
    let zeros = "";
    for (let i = arrayNums.length - 1; i >= 0; i--) {
      const romanNumber = this.romanLib[arrayNums[i] + zeros];
      arrayRom.push(romanNumber);
      zeros += "0";
    }
    return arrayRom.reverse().join("");
  }
}

module.exports = new RomanCalculator();
