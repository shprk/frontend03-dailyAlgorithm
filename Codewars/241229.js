// Convert string to camel case
function toCamelCase(str){
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if((str[i] === "-") || (str[i] === "_")){
      newStr += str[i+1].toUpperCase();
    } else {
      if((str[i-1] === "-") || (str[i-1] === "_") && i !== 0){
        continue;
      }else {
      newStr += str[i];
      }
    }
  }
  return newStr;
}
