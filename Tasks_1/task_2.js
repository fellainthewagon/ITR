function start(num = 0) {
  let incrementor = 2;
  let previousNum;
  let result;

  return function () {
    if (previousNum % 5 === 0 && previousNum !== 0) {
      incrementor = 3;
      result = previousNum / 5;
      previousNum = 0;
      return result;
    } else if (previousNum % 7 === 0 && previousNum !== 0) {
      incrementor = 1;
      result = previousNum - 7;
      previousNum = 0;
      return result;
    }

    num += incrementor;
    previousNum = num;
    return num;
  };
}

const generator = start(1);

console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
