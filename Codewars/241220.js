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