const morse = require("./classes/MorseCalculator");
const roman = require("./classes/RomanCalculator");
const arabic = require("./classes/ArabicCalculator");

console.log(arabic.calc(123, 34, "+"));

console.log(morse.calc(100, 10, "+"));
console.log(morse.calc(9, 100, "-"));
console.log(morse.calc(100, 10, "*"));
console.log(morse.calc(100, 10, "/"));

console.log(roman.calc(1471, 99, "+"));
console.log(roman.calc(100, 100, "*")); // { error: 'The result is more than 3999!', result: 10000 }
console.log(roman.calc(1, 10, "-")); // { error: 'The result is a negative or zero!', result: -9 }
console.log(roman.calc(100, 0, "/")); // { error: 'Сannot divide by zero!', result: null }

console.log(roman.calc(1, 10, "=")); // { error: 'Only for integers and operators + - / *', result: null }
