// Moving Zeros To The End
function moveZeros(arr) {
  const newArr = [];
  const zero = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      newArr.push(arr[i])
    } else {
      zero.push(arr[i])
    }
  }
  return [...newArr,...zero];
}


// Merge in 2048
// 문제 푸는 중.......
// 아직 해결 못함
function merge(line) {
  const arr = [];
  const narr = [];
  let count = 0;
  let ncount = 0;
  // [0,0,2,2]
  for(let i = 0; i < line.length; i++){
    for(let j = 0; j < line.length; j++){
      if(j !== 0){
        if(count === 0){
          if(line[j] !== 0){
            if(line[0] === 0){
              line[0] = line[j];
              line[j] = 0;
              continue;
            }
            line[0] += line[j];
            line[j] = 0;
            arr.push(line[0]);
            count++;
          }
        }
        if(ncount === 0) {
          if (line[j] !== 0){
            narr.push(line[j]);
            console.log("narr", narr);
            ncount++
          } 
        }
      }
    }
    if(narr.length === 0){
      narr.push(0);
      narr.push(0);
      narr.push(0);
    }
  }
  if(narr.length === 1){
    narr.push(0);
    narr.push(0);
    if(narr.length === 2){
      narr.push(0);
    }
  }

  const addArr = [...arr,...narr];
  
  console.log("------");
  console.log(arr);
  console.log(narr);
  console.log(addArr);
  console.log("------");

  return addArr;
};
