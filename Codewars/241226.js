// Find The Parity Outlier
function findOutlier(integers){
  const oddArr = [];
  const evenArr = [];
  let oddCnt = 0;
  let evenCnt = 0;
  for(let i = 0; i < integers.length; i++){
    if(integers[i] % 2 === 0){
      oddCnt++;
      oddArr.push(integers[i]);
    }else if(integers[i] % 2 !== 0 ){
      evenCnt++;
      evenArr.push(integers[i]);
    }
    if(oddCnt > 1 && evenCnt === 1){
      return evenArr[0];
    }else if(evenCnt > 1 && oddCnt === 1){
     return oddArr[0];
    }
  
  }
}
