function lovefunc(flower1, flower2){
  // moment of truth 
  // 여기서 짝수인지 홀수 인지 어떻게 알았는지, 
  // 홀수가 그래서 정의가 뭐야? > 2로 나누어서 나머지가 생기는 수. 1, 3, 5, 7, 9 따위의 수
  // 그럼 짝수는 그 이외의 겂들 0 , 2, 4, 6, 8 이 되는 것
  // 여러가지 경우의 수가 있다는걸 파악해두기 
  // 방법은 여러가지가 있음 숫자로 나타낼수도 있고 문자열로도 나타낼 수 있음 왜? 거짓인 값들 : 0, 빈문자열, undefined, null 등 
  // 형변환 
  // 정의를 내려보기...
  let test1 = flower1 % 2; // 1 
  let test2 = flower2 % 2; // 0
  
  let result = test1 + test2;
  
  if(result === 1) {
    return true;
  } else {
    return false;
  }
  
}