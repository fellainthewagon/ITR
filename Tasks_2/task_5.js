/**
 *   I used 'for-loops' because it has 'break'/'continue';
 */

function findKayakAmount(n, d) {
  // filter, sort and split array to two (more and less than middleweight) arrays
  const [moreThanMiddle, lessThanMiddle] = splitter(n, d);
  // return amount if one of arrays is empty
  if (!moreThanMiddle.length || !lessThanMiddle.length) {
    return moreThanMiddle.length + Math.ceil(lessThanMiddle.length / 2);
  }

  let amount = 0;
  // find the maxSum (two haviest people) but not more than d-param
  for (let i = 0; i < moreThanMiddle.length; i++) {
    for (let j = 0; j < lessThanMiddle.length; j++) {
      if (lessThanMiddle[j] === "inKayak") continue;

      // if we find maxSum -> mark people and exit from cycle
      const maxSum = moreThanMiddle[i] + lessThanMiddle[j];
      if (maxSum <= d) {
        moreThanMiddle[i] = lessThanMiddle[j] = "inKayak";
        amount++;
        break;
      }
    }
    // if we don't find pair -> mark person from moreThanMiddle
    if (moreThanMiddle[i] !== "inKayak") {
      moreThanMiddle[i] = "inKayak";
      amount++;
    }
  }

  // after cycles we don't have people in the moreThanMiddle
  // check people without kayak in the lessThanMiddle
  const withoutKayak = lessThanMiddle.filter((item) => item !== "inKayak");
  return amount + Math.ceil(withoutKayak.length / 2);
}

/**
 *   secondary functions
 */

function splitter(group, wheight) {
  const middlePoint = Math.floor(wheight / 2);
  const array = group
    .filter((person) => person <= wheight)
    .sort((a, b) => b - a);

  const more = [];
  let less;

  // loop through sorted array to the middle and exit from cycle
  for (let i = 0; i < array.length; i++) {
    if (array[i] > middlePoint) {
      more.push(array[i]);
    } else {
      less = array.slice(i);
      break;
    }
  }
  if (less === undefined) less = [];

  return [more, less];
}

console.log(findKayakAmount([50, 74, 60, 82], 135));
console.log(findKayakAmount([50, 120, 74, 60, 100, 82], 135));
console.log(findKayakAmount([190, 120, 68, 68, 110, 82], 135)); // empty 'less' array
console.log(findKayakAmount([55, 64, 60, 67, 150, 67], 135)); // empty 'more' array
