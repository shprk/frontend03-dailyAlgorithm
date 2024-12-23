//아이소그램은 연속적이든 비연속적이든 반복되는 문자가 없는 단어입니다.
// //문자만 포함된 문자열이 아이소그램인지 여부를 판별하는 함수를 구현합니다.
// 빈 문자열이 아이소그램이라고 가정합니다. 대소문자는 무시합니다.

function isIsogram(str){
    const getArray = Array.from(str.toLowerCase());
    console.log(getArray);
    
    for (let i = 0; i<getArray.length; i++) {
        for (let j =0; j<getArray.length; j++){
          let box = getArray[j+1]
          console.log(getArray[j]);
          console.log(getArray[j++]);
          if (getArray[j] !== box) {
            box[j+1];
          } else if(getArray[j] === "") {
            return true;
          }
          
        }
    }
    return true;
  }
  
  isIsogram("arety");
  
  //방법이 안떠오름....ㅠㅠㅠ...