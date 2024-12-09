// Double Char
function doubleChar(str) {
  // Your code here
  let doubleStr = "";
  for(let i = 0; i < str.length; i = i + 1) {
    doubleStr += str[i] + str[i];
  }
  return doubleStr;
}
