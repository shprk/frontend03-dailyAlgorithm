//파라미터로 숫자를 받아온다. 받아온 숫자들 중 가능 큰 숫자와 낮은 숫자를 반환 해야 한다. 
// 단 가장 큰 숫자가 먼저 와야 하고 공백으로 구분 해야 한다.

function highAndLow(numbers){
    const newArray = numbers.split(" ");
    console.log(newArray);
    const box= [];
    
    for(let i=0; i<newArray.length; i++){
      box.push(Number(newArray[i]));
    }
    
    for(let j =0; j<box.length; j++){
      for(let f = 0; f<box.length; f++){
        if(box[f] > box[f + 1]){
          let temp = box[f];
          box[f] = box[f + 1];
          box[f + 1] = temp;
        }
      }
    }
  
    return `${box[box.length - 1]} ${box[0]}`;
  }
  