//이 카타에서는 음수가 아닌 정수와 문자열 목록을 받아 
// 문자열이 필터링된 새 목록을 반환하는 함수를 만들 것입니다.

function filter_list(l) {
    const Array = l;
    const box = [];
    
    for(let i = 0; i<Array.length; i++){
      if(typeof Array[i] === 'number') {
        box.push(Array[i]);
      }
    }
    return box;
  }