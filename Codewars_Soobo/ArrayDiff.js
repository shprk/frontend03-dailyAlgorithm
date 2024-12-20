/**
 * 숫자 배열a - 숫자 배열b 빼는 문제
 */
function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      a[i] = null;
    }
  }

  return a.filter((number) => number !== null)
}