const { StringFormatter } = require("./StringFormatter");

class NonRepeatString extends StringFormatter {
  constructor(substring) {
    super();
    this.regex = new RegExp(substring, "g");
    this.substring = substring;
  }

  removeNonUniqueChars(inputString) {
    const devider = inputString.indexOf(this.substring) + this.substring.length;
    const firstPartString = inputString.slice(0, devider);
    const lastPartString = inputString.slice(devider);

    return firstPartString + lastPartString.replace(this.regex, "");
  }
}

module.exports = new NonRepeatString("Fella in");
