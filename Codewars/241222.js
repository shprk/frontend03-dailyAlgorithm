// Simple Pig Latin
function pigIt(string){
  //Code here
  const arrayInString = string.split(" ");
  const arrayInNewString = [];
  for(let i = 0; i < arrayInString.length; i++){
    if((i === (arrayInString.length - 1)) && arrayInString[i].length === 1){
      arrayInNewString.push(arrayInString[i]);
      continue;
    }
    arrayInString[i]+=arrayInString[i][0];
    arrayInNewString.push(arrayInString[i].slice(1) + "ay");
  }
  return arrayInNewString.join(" ");
}

