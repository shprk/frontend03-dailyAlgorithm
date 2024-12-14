
// case
const a = [ 0, 0, 0, 2, 0, 2, 2 ];
const b = [ 32, 32, 16, 4, 0, 2 ];

function merge(line) {

  const noneZeroArray = zeroMinus(line);

  for (let i = 0; i < noneZeroArray.length - 1; i++) {
    if (!noneZeroArray[i]) {
      continue;
    }

    if (noneZeroArray[i] === noneZeroArray[i + 1]) {
      noneZeroArray[i] *= 2;
      noneZeroArray[i + 1] = 0;
    }
  }
  const newLine = zeroMinus(noneZeroArray);

  return newLine;
}

function zeroMinus(line) {
  const defaultLength = line.length;
  const noneZeroArray = line.filter((num) => 0 !== num && null !== num);

  const forLength = defaultLength - noneZeroArray.length;

  for (let i = 0; i < forLength; i++) {
    noneZeroArray.push(0);
  }

  return noneZeroArray;
}

merge(a);
