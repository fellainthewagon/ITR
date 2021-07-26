/**
 *  For natural numbers only!
 */

function genMagicSquare(n) {
  if (n === 2) {
    return "There is no Magic Square for this number.";
  }
  if (n % 2 === 1) {
    return oddMagicSquare(n);
  }
  if (n % 2 === 0 && (n / 2) % 2 === 0) {
    return doublyEvenMagicSquare(n);
  }
  if ((n / 2) % 2 === 1) {
    return singlyEvenMagicSquare(n);
  }
}

for (let i = 1; i <= 10; i++) {
  console.table(genMagicSquare(i));
}

/**
 * *****************************************************
 */

function oddMagicSquare(n) {
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

/* ******************************************************* */

function doublyEvenMagicSquare(n) {
  const matrix = initEmptyMatrix(n);
  const quarter = n / 4;
  const threeQuarter = quarter * 3;
  let num = 1;
  let rev = n * n;

  for (let row = 0; row < quarter; row++) {
    for (let col = 0; col < n; col++) {
      if (col < quarter || col >= threeQuarter) {
        matrix[row][col] = rev;
        rev--;
        num++;
      } else {
        matrix[row][col] = num;
        num++;
        rev--;
      }
    }
  }

  for (let row = quarter; row < threeQuarter; row++) {
    for (let col = 0; col < n; col++) {
      if (col < quarter || col >= threeQuarter) {
        matrix[row][col] = num;
        rev--;
        num++;
      } else {
        matrix[row][col] = rev;
        num++;
        rev--;
      }
    }
  }

  for (let row = threeQuarter; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (col < quarter || col >= threeQuarter) {
        matrix[row][col] = rev;
        rev--;
        num++;
      } else {
        matrix[row][col] = num;
        num++;
        rev--;
      }
    }
  }

  return matrix;
}

/* ******************************************************* */

function singlyEvenMagicSquare(n) {
  const mid = n / 2;
  const tempSquare = oddMagicSquare(mid);
  let matrix = initEmptyMatrix(n);
  const incrementor = mid * mid;
  let firstPoint = Math.floor(n / 4);
  const step = tempSquare.length;

  // fill matrix with basic values
  for (let row = 0; row < mid; row++) {
    for (let col = 0; col < mid; col++) {
      matrix[row][col] = tempSquare[row][col];
    }
  }
  for (let row = mid; row < n; row++) {
    for (let col = mid; col < n; col++) {
      matrix[row][col] = matrix[row - mid][col - mid] + incrementor;
    }
  }
  for (let row = 0; row < mid; row++) {
    for (let col = mid; col < n; col++) {
      matrix[row][col] = matrix[row + mid][col] + incrementor;
    }
  }
  for (let row = mid; row < n; row++) {
    for (let col = 0; col < mid; col++) {
      matrix[row][col] = matrix[row - mid][col + mid] + incrementor;
    }
  }

  // after init basic matrix we should transform it
  for (let row = 0; row < step; row++) {
    for (let col = 0; col < firstPoint; col++) {
      if (row === firstPoint && col === 0) {
        matrix = castling(matrix, step, row, col, firstPoint);
        continue;
      }
      matrix = castling(matrix, step, row, col);
    }
  }

  // return if n = 6
  if (n < 7) return matrix;

  let q = n === 10 ? 1 : (n - 10) / 4 + 1;
  for (let row = 0; row < step; row++) {
    for (let col = n - q; col < n; col++) {
      matrix = castling(matrix, step, row, col);
    }
  }

  return matrix;
}

/* ******************************************************* */
// secondary functions

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

function castling(matrix, step, row, col, firstPoint = 0) {
  const temp = matrix[row][col + firstPoint];
  matrix[row][col + firstPoint] = matrix[row + step][col + firstPoint];
  matrix[row + step][col + firstPoint] = temp;
  return matrix;
}
