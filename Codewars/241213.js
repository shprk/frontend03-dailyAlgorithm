// Sum of positive
function positiveSum(arr) {
  let sum = 0;
  arr.map(function(value) {
    if(value > 0) {
      sum += value;
    }
  });
  return sum;
}

// Reversed Strings
function solution(str){
  let reverseStr = "";;
  for(let i = 1; i < str.length + 1; i++) {
    reverseStr += str[str.length-i]
  }
  return reverseStr;
}

// Convert a Number to a String!
function numberToString(num) {
  return num + "";
}
