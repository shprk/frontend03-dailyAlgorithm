// Convert a String to a Number!
const stringToNumber = function(str) {
  // put your code here
//   const numStr = Number(str);
  const numStr = str * 1
  return numStr;
}

// Return Negative
function makeNegative(num) {
  // Code?
  if(num > 0) {
    let negativeNum = num - (num * 2)
    return negativeNum;
  }else {
    return num;
  }
}
