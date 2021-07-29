const Calculator = require("./Calculator");

class MorseCalculator extends Calculator {
  calc(a, b, operator) {
    try {
      this.operator = operator;
      const result = this.getResult(a, b);
      const arrayNums = String(result).split("");

      return this.#getMorseResult(arrayNums);
    } catch (error) {
      return { error: error.message, result: error.result };
    }
  }

  #getMorseResult(arrayNums) {
    let morseResult = "";
    for (let num of arrayNums) {
      morseResult += this.morseLib[num] + " ";
    }
    return morseResult;
  }
}

module.exports = new MorseCalculator();
