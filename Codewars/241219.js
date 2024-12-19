// Array.diff
function arrayDiff(a, b) {
  let newArr = [];
  if((b.length === 0) || (a.length === 0)) {
  return a;
  }
  const arr = a.filter((x) => {
  let count = 0;
    b.map((y) => {
      if(y === x){
        count++;
      }
    })
    if (count === 0) {
      newArr.push(x);
    }
  });
  return newArr;
}