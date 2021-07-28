/**
 *    Roman implementation is correct for 1-3999 result!
 */

class Calculator {
  constructor() {
    this.romanLib = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      20: "XX",
      30: "XXX",
      40: "XL",
      50: "L",
      60: "LX",
      70: "LXX",
      80: "LXXX",
      90: "XC",
      100: "C",
      200: "CC",
      300: "CCC",
      400: "CD",
      500: "D",
      600: "DC",
      700: "DCC",
      800: "DCCC",
      900: "CM",
      1000: "M",
      2000: "MM",
      3000: "MMM",
    };

    this.morseLib = {
      1: "• — — — —",
      2: "• • — — —",
      3: "• • • — —",
      4: "• • • • —",
      5: "• • • • •",
      6: "— • • • •",
      7: "— — • • •",
      8: "— — — • •",
      9: "— — — — •",
      0: "— — — — —",
    };
  }

  calculator(result, numType) {
    if (numType === "arabic") return result;
    this.arrayNums = String(result).split("");

    if (numType === "roman") {
      return result <= 0
        ? "The result is a negative or zero. Set 'arabic' option to get the result"
        : this.romanResult();
    }

    if (numType === "morse") {
      return result < 0
        ? "The result is a negative number. Set 'arabic' option to get the result"
        : this.morseResult();
    }

    return `We dont' have '${numType}' implementation. Please, set 'arabic', 'roman' or 'morse' option.`;
  }

  romanResult() {
    let arrayRom = [];
    let zeros = "";
    for (let i = this.arrayNums.length - 1; i >= 0; i--) {
      const romanNumber = this.romanLib[this.arrayNums[i] + zeros];
      arrayRom.push(romanNumber);
      zeros += "0";
    }
    return arrayRom.reverse().join("");
  }

  morseResult() {
    let morseResult = "";
    for (let num of this.arrayNums) {
      morseResult += this.morseLib[num] + " ";
    }
    return morseResult;
  }
}

/**
 * * * * * * * * Classes * * * * * * *
 */

class Add extends Calculator {
  constructor() {
    super();
  }

  calculate(a, b, numType = null) {
    const result = a + b;
    return this.calculator(result, numType);
  }
}

class Subtract extends Calculator {
  constructor() {
    super();
  }

  calculate(a, b, numType = null) {
    const result = a - b;
    return this.calculator(result, numType);
  }
}

class Multiply extends Calculator {
  constructor() {
    super();
  }

  calculate(a, b, numType = null) {
    const result = a * b;
    return this.calculator(result, numType);
  }
}

class Devide extends Calculator {
  constructor() {
    super();
  }

  calculate(a, b, numType = null) {
    if (b === 0) return "Сannot divide by zero";
    const result = a / b;
    return this.calculator(result, numType);
  }
}

const add = new Add();
const subtract = new Subtract();
const multiplay = new Multiply();
const devide = new Devide();

console.log(add.calculate(99, 400, "arabic"));
console.log(add.calculate(99, 400, "roman"));
console.log(add.calculate(99, 400, "morse"));
console.log(add.calculate(99, 400, "mandalorian")); // other implementation

console.log(subtract.calculate(99, 400, "arabic"));
console.log(subtract.calculate(400, 99, "roman"));
console.log(subtract.calculate(99, 400, "roman")); // negative/zero result
console.log(subtract.calculate(400, 99, "morse"));

console.log(multiplay.calculate(99, 9, "arabic"));
console.log(multiplay.calculate(99, 9, "roman"));
console.log(multiplay.calculate(99, 9, "morse"));

console.log(devide.calculate(99, 9, "arabic"));
console.log(devide.calculate(99, 9, "roman"));
console.log(devide.calculate(99, 9, "morse"));
console.log(devide.calculate(99, 0, "morse")); // devide by zero
