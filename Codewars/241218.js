// Stop gninnipS My sdroW!
function spinWords(string){
  const strArr = string.split(" ");
  let fullStr = "";
  for(let i = 0; i < strArr.length; i++){
  let str = "";
  if(strArr[i].length >= 5) {
    for(let j = strArr[i].length - 1; j >= 0; j--){
      str += strArr[i][j];
    }
  } else {
    str += strArr[i];
  }
  if(strArr.length >= 2) {
      if(i !== 0) {
      fullStr += " " + "" + str;
      } else {
        fullStr += "" + str;
      }
    } else {
      fullStr += "" + str;
    }
  }
  return fullStr;
}