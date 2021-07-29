class StringFormatter {
  constructor() {
    this.collection = new Set();
  }

  removeNonUniqueChars(inputString) {
    this.collection.clear();
    return inputString
      .split("")
      .filter((char) => {
        if (!this.collection[char]) {
          this.collection[char] = "v";
          return char;
        }
      })
      .join("");
  }
}

const stringFormatter = new StringFormatter();

module.exports = { StringFormatter, stringFormatter };
