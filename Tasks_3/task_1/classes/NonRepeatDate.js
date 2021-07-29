const { StringFormatter } = require("./StringFormatter");

/**
 * for dateFormat:
 * DD.MM.YYYY, DD/MM/YYYY, DD-MM-YYYY
 * MM-DD-YYYY, MM/DD/YYYY, MM.DD.YYYY
 */

class NonRepeatDate extends StringFormatter {
  constructor(
    regex = /((0?[1-9]|1\d|2\d|3[0-1])|\d{4})[.\-\/](0?[1-9]|1\d|2\d|3[0-1])[.\-\/]\d{4}\D?/g
  ) {
    super();
    this.regex = regex;
  }

  removeNonUniqueChars(inputString) {
    this.collection.clear();
    return inputString
      .split(" ")
      .map((part) => (part.match(this.regex) ? this.#ifDate(part) : part))
      .join(" ");
  }

  #ifDate(part) {
    // date without .,?!
    const date = isNaN(part[part.length - 1])
      ? part.substring(0, part.length - 1)
      : part;

    if (!this.collection.has(date)) {
      this.collection.add(date);
      return part;
    }
    // return --> .,?!
    return part.split(date).join("");
  }
}

module.exports = new NonRepeatDate();
