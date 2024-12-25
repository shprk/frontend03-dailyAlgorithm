// Sum of Digits / Digital Root
function digitalRoot(n) {
  const nStr = "" + n;
  let sum = 0;
  for(let i = 0; i < nStr.length; i++){
    sum += Number(nStr[i]);
    if(((""+sum).length === 1) && (i === nStr.length - 1)) {
      return sum;
    }
  }
  return digitalRoot(sum);
}

// Create Phone Number
function createPhoneNumber(numbers){
  let str = "";
  for(let i = 0; i < numbers.length; i++){
    if(i === 0){
        str += "("+numbers[i];
    }else if(i === 2){
        str += numbers[i]+") ";
    }else if(i === 6){
      str += "-"+numbers[i]
    }else{
      str += numbers[i];
    }
  }
  return str;
}
