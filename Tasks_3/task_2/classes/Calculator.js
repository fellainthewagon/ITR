const CalculatorError = require("./error/CalculatorError");
const { romanLib, morseLib } = require("./lib/lib"); // it looks better if libs is hidden

module.exports = class Calculator {
  constructor() {
    this.romanLib = romanLib;
    this.morseLib = morseLib;
    this.operator;
  }

  getResult(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || !this.#isOperator()) {
      throw new CalculatorError("Only for integers and operators + - / *");
    }
    if (this.operator === "+") return this.#add(a, b);
    if (this.operator === "-") return this.#subtract(a, b);
    if (this.operator === "*") return this.#multiply(a, b);
    if (this.operator === "/") return this.#divide(a, b);
  }

  #add(a, b) {
    return a + b;
  }
  #subtract(a, b) {
    return a - b;
  }
  #multiply(a, b) {
    return a * b;
  }
  #divide(a, b) {
    if (b === 0) {
      throw new CalculatorError("Сannot divide by zero!");
    }
    return a / b;
  }
  #isOperator() {
    return ["/", "*", "-", "+"].indexOf(this.operator) !== -1;
  }
};
