// Duplicate Encoder
function duplicateEncode(word){
  const newWord = word.toLowerCase();
  let answerWord = "";
  const arr = [];
  for(let i = 0; i < newWord.length; i++){
  let count = 0;
    for(let j = 0; j < newWord.length; j++){
      if(newWord[i] === newWord[j]){
        count++;
      }
    }
    arr.push(count);
  }
  arr.map((x)=>{
    if(x >= 2){
      answerWord += ")"
    } else {
      answerWord += "("
    }
  })
    return answerWord;
}