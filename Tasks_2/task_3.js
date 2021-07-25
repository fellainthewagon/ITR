function copy(n, speedA, speedB) {
  // fastest printer
  const bestSpeed = speedA <= speedB ? speedA : speedB;

  // make first copy with fastest printer
  let seconds = bestSpeed;
  let amountOfCopyNeeded = n - 1;

  // performance of both printers (copy/sec)
  const copiesPerSecond = 1 / speedA + 1 / speedB;

  while (amountOfCopyNeeded > 0) {
    seconds++;
    amountOfCopyNeeded -= copiesPerSecond;
  }
  return seconds;
}

console.log(copy(4, 1, 1));
console.log(copy(5, 1, 2));
