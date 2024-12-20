/**
 * 5글자 이상 찾아 뒤집는 문제
 */
function spinWords(string){
  const stringArr = string.split(" ");

  const result = stringArr.map(str => {
    if (str.length >= 5) {
      return str.split("").reverse().join("");
    }
    return str;
  })

  return result.join(" ");
}