/**
 * 6Kyu Backspace in String
 */
function cleanString(s) {
  const stringArray = Array.from(s);

  let hashCount = 0;
  const resultArray = [];

  for (let i = stringArray.length - 1; i >= 0; i--) {
    if (stringArray[i] === "#") {
      hashCount++;
      continue;
    }

    if (hashCount > 0) {
      hashCount--;
      continue;
    } else {
      resultArray.push(stringArray[i]);
    }
  }

  return resultArray.reverse().join("");
}

/**
 * 해당 문제 리팩터링 map과 pop, push 사용
 */
function cleanString(s) {
  const resultArray = [];

  [...s].map((value) => {
    if (value === "#") {
      resultArray.pop();
    } else {
      resultArray.push(value);
    }
  })

  return resultArray.join("");
}
