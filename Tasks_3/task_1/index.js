const { stringFormatter } = require("./classes/StringFormatter");
const nonRepeatNumber = require("./classes/NonRepeatNumber");
const nonRepeatString = require("./classes/NonRepeatString");
const nonRepeatDate = require("./classes/NonRepeatDate");

const basicString = "Hello, Fella in the wagon!";
const numbers = "Do u know that 999 minus 777 is not 999 and 777?";
const dates =
  "Hey! 31-12-2020, banana 12/31/1990 cappuccino, 31-12-2020 boom 12/31/1990, and this 99-99-7777 doesn't look like a date.";
const string =
  "Wow Fella in the wagon? Hello, Fella in the wagon! Fella in the wagon.";

console.log(stringFormatter.removeNonUniqueChars(basicString));
console.log(nonRepeatNumber.removeNonUniqueChars(numbers));
console.log(nonRepeatDate.removeNonUniqueChars(dates));
console.log(nonRepeatString.removeNonUniqueChars(string));
