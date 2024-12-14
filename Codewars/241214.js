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