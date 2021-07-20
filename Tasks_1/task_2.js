function start(num) {
  let incrementor = 2;
  let previousNum;
  let flag;

  return function () {
    previousNum = num;

    if (previousNum % 5 === 0 && flag) {
      flag = false;
      incrementor = 3;
      return previousNum / 5;
    } else if (previousNum % 7 === 0 && flag) {
      flag = false;
      incrementor = 1;
      return previousNum - 7;
    }

    flag = true;
    return (num += incrementor);
  };
}

const generator = start(0);

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
