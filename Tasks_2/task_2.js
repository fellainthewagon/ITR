function generateVolumes(pages, k) {
  const amountOfPages = pages.reduce((sum, num) => sum + num, 0);

  // if only 1 tome
  if (k === 1) return amountOfPages;

  // first candidate is average number of pages per 1 tome
  let candidate = Math.ceil(amountOfPages / k);

  let array = pages;
  let novel = [];
  let tome = 0;

  // start with average number
  // if array has rest of pages => candidate++
  while (array.length) {
    // reset values
    novel = [];
    array = pages;

    // each tomes should't contain more pages than candidate
    // after create tome => slice array of pages
    for (let i = 1; i <= k; i++) {
      for (let j = 0; j < array.length; j++) {
        if (tome + array[j] > candidate) {
          array = array.slice(j);
          break;
        }

        tome += array[j];
        if (j === array.length - 1) array = array.slice(j + 1);
      }

      novel.push(tome);
      tome = 0;
    }
    candidate++;
  }
  // find max value
  return Math.max(...novel);
}

console.log(generateVolumes([1, 2, 1, 1], 3));
console.log(generateVolumes([1, 2, 1], 2));
console.log(generateVolumes([1, 7, 3, 1], 2));
console.log(generateVolumes([1, 3, 2, 11, 2], 3));
