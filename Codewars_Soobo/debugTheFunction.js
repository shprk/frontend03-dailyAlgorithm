/**
 * 곱하기, 더하기, 문자열 뒤집기라는 이름의 함수를
 * 디버깅 하는 문제
 *
 */
function multi(arr) {
  return arr.reduce((acr, num) => {
    return acr * num;
  })
}
function add(arr) {
  return arr.reduce((acr, num) => {
    return acr + num;
  }, 0)
}
function reverse(str) {
  return Array.from(str).reverse().join('');
}
