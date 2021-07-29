module.exports = class CalculatorError extends Error {
  constructor(message, result = null) {
    super();
    this.message = message;
    this.result = result;
  }
};
