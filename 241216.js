// Find the odd int
function findOdd(A) {
  let count = 0;
  for(let i = 0; i < A.length; i++) {
    for(let j = 0; j < A.length; j++) {
      if(A[i] === A[j]) {
        count++;
        console.log(count);
      }
    }
    if(count%2 !== 0) {
      return A[i];
    }
  }
}

// Counting Duplicates
function duplicateCount(text){
  const newText = text.toLowerCase();
  const textArray = [];
  if(text.length === 0){
    return 0;
  }
  for(let i = 0; i < newText.length; i++) {
  let count = 0;
    for(let j= 0; j < newText.length; j++) {
      if(newText[i] === newText[j]) {
        count++; 
        console.log(count);
      }
    }
    if(count >= 2) {
      textArray.push(newText[i]);
    }
  }
  const setArray = [...new Set(textArray)];
  return setArray.length;
}