//          1   2   3   4   5

//    1   [ 11, 18, 25, 02, 09]
//    2   [ 10, 12, 19, 21, 03]
//    3   [ 04, 06, 13, 20, 22]
//    4   [ 23, 05, 07, 14, 16]
//    5   [ 17, 24, 01, 08, 15]

// ----|---------------|----------------|----------------|----------------|----------------|
// NUM | 1  2  3  4  5 | 6  7  8  9  10 | 11 12 13 14 15 | 16 17 18 19 20 | 21 22 23 24 25 |
// ----|---------------|----------------|----------------|----------------|----------------|
// ROW | 5  1  2  3  4 | 3  4  5  1  2  | 1  2  3  4  5  | 4  5  1  2  3  | 2  3  4  5  1  |
// ----|---------------|----------------|----------------|----------------|----------------|
// COL | 3  4  5  1  2 | 2  3  4  5  1  | 1  2  3  4  5  | 5  1  2  3  4  | 4  5  1  2  3  |
// ----|---------------|----------------|----------------|----------------|----------------|

// pseudocode:

// start => (R = N && C = N/2 (ceil))
// step => (R += 1 && C += 1);
// cycle = N(5);
// reset => (R -= 1 && C += 0);

/* --------------------------------------------------------------------------------------  */

function genMagicSquare(n) {
  const numberOfCells = n * n;
  const matrix = initEmptyMatrix(n);
  let [row, column] = startCoords(n);

  let cycle = 1;

  for (let i = 1; i <= numberOfCells; i++) {
    if (row > n - 1) row = 0;
    if (column > n - 1) column = 0;

    matrix[row][column] = i;

    cycle++;
    if (cycle > n) {
      cycle = 1;
      row -= 1;
    } else {
      row++;
      column++;
    }
  }

  return matrix;
}

/**
 *   secondary functions
 */

function initEmptyMatrix(n) {
  const matrix = [];

  for (let row = 0; row < n; row++) {
    matrix.push([]);
    for (let column = 0; column < n; column++) {
      matrix[row][column] = "";
    }
  }
  return matrix;
}

function startCoords(n) {
  return [n - 1, Math.ceil(n / 2) - 1];
}

console.log(genMagicSquare(2));
