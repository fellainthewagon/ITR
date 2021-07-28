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

// ******************** NonRepeatNumber *********************

class NonRepeatNumber extends StringFormatter {
  constructor() {
    super();
  }

  removeNonUniqueChars(inputString) {
    this.collection.clear();
    return inputString
      .split(" ")
      .map((part) => (isNaN(parseFloat(part)) ? part : this.#ifNumber(part)))
      .join(" ");
  }

  #ifNumber(part) {
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

// ******************** NonRepeatDate *********************

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

// ******************* NonRepeatString ***********************

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

    return firstPartString + lastPartString.replaceAll(this.regex, "");
  }
}

// ******************************************

const stringFormatter = new StringFormatter();
const nonRepeatNumber = new NonRepeatNumber();
const nonRepeatDate = new NonRepeatDate();
const nonRepeatString = new NonRepeatString("Fella in");

console.log(stringFormatter.removeNonUniqueChars("Hello, Fella in the wagon!"));
console.log(
  nonRepeatNumber.removeNonUniqueChars(
    "Do u know that 999 minus 777 is not 999 and 777?"
  )
);
console.log(
  nonRepeatDate.removeNonUniqueChars(
    "Hey! 31-12-2020, banana 12/31/1990 cappuccino, 31-12-2020 boom 12/31/1990, and this 99-99-7777 doesn't look like a date."
  )
);
nonRepeatString.removeNonUniqueChars(
  "Wow Fella in the wagon? Hello, Fella in the wagon! Fella in the wagon."
);
