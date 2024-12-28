// Replace With Alphabet Position
function alphabetPosition(text) {
  const lowerCaseText = text.toLowerCase();
  let textOrder = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 0; i < lowerCaseText.length; i++){
    for(let j = 0; j < alphabet.length; j++){
      if(lowerCaseText[i] === alphabet[j]){
        if(textOrder.length === 0){
          textOrder += j + 1;
        }else {
          textOrder += " " + (j+1);
        }
      }
    }
  }
  return textOrder;
}
