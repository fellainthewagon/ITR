const { StringFormatter } = require("./StringFormatter");

class NonRepeatNumber extends StringFormatter {
  constructor() {
    super();
  }

  removeNonUniqueChars(inputString) {
    this.collection.clear();
    return inputString
      .split(" ")
      .map((part) => (isNaN(parseFloat(part)) ? part : this.#numHandler(part)))
      .join(" ");
  }

  #numHandler(part) {
    // number without .,?!
    const num = parseFloat(part);

    if (!this.collection.has(num)) {
      this.collection.add(num);
      return part;
    }
    // return --> ,.!?
    return part.split(num).join("");
  }
}

module.exports = new NonRepeatNumber();
