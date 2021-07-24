function activeBulbs(n, p) {
  const bulbs = [];

  for (let num = 1; num <= n; num++) {
    bulbs.push([num, false]);
  }

  for (let divider of p) {
    bulbs.forEach((bulb) => {
      if (bulb[0] % divider === 0) {
        bulb[1] = !bulb[1];
      }
    });
  }

  return bulbs.filter((bulb) => bulb[1] === true).length;
}

console.log(activeBulbs(20, [2, 3, 8]));
console.log(activeBulbs(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]));
