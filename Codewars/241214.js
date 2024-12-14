// Vowel Count
function getCount(str) {
  let count = 0;
  const vowelArray = ["a","e","i","o","u"];
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < vowelArray.length; j++){
      if(str[i] === vowelArray[j]){
        count += 1;
        }
    }
  }
  return count;
}

// Disemvowel Trolls
function disemvowel(str) {
  let vowelDelStr = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] === "a" || str[i] === "A"){
      continue;
    }else if(str[i] === "i" || str[i] === "I"){
      continue;
    }else if(str[i] === "e" || str[i] === "E"){
      continue;
    }else if(str[i] === "o" || str[i] === "O"){
      continue;
    }else if(str[i] === "u" || str[i] === "U"){
      continue;
    }
    vowelDelStr += str[i];
  }
  return vowelDelStr;
}