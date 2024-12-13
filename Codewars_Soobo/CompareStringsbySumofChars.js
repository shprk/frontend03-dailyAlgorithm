/**
 * 문자열을 정수로 변환 후 합계 비교 문제
 *
 * @param {string} s1
 * @param {string} s2
 * @returns number
 */

function compare(s1, s2) {
  let sumS1 = coumtStringAscii(s1);
  let sumS2 = coumtStringAscii(s2);

  return sumS1 === sumS2;
}

function coumtStringAscii(str) {
  if (!str) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let ascii = str[i].charCodeAt();

    if (122 >= ascii && ascii >= 97) {
      ascii -= 32;
    }

    if (90 >= ascii && ascii >= 65) {
      sum += ascii;
    } else {
      return 0;
    }

  }

  return sum;
}
