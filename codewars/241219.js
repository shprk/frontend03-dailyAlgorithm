// 모든 동물들이 한 가지 요리를 가져오며 요리는 영문 기준 동물의 이름과 같은 글자로 시작하고 끝나야 한다.
// 항상 소문자 문자열이고 글자 수는 최소 두 글자 이다.
// 하이픈이나 공백은 문자열의 시작과 끝에 나타나지 않을 것이며
// 숫자 또한 나올 일이 없어 고려하지 않아도 된다.

// - 영문 기준 동물의 이름과 요리의 첫 글자 그리고 끝 글자가 같아야 한다.
// - 첫 글자와 끝 글자를 비교한다.
// - 받을 문자는 무조건 소문자이기  때문에 받아올 문자열만 비교 하여 참과 거짓을 알려 준다.
// - 각 문자들을 비교하기 위해서는 받은 문자들의 각 순서를  알아야 한다.
// - 순서를 알려면 배열로 변환하여 인덱스 번호를 받아오기!
// - 받은 번호의 첫 번째와 마지막을 비교해서 참 또는 거짓을 반환 해 보자!

function feast(beast, dish) {
    const changeArrayBeastText = Array.from(beast);
    const changeArrayDishText = Array.from(dish);
    
    const checkBeastFirstText = changeArrayBeastText[0];
    const checkBeastLastText = changeArrayBeastText[changeArrayBeastText.length - 1];
    const checkDishFirstText = changeArrayDishText[0];
    const checkDishLastText = changeArrayDishText[changeArrayDishText.length -1];
    
    if(checkBeastFirstText === checkDishFirstText && checkBeastLastText === checkDishLastText){
      return true;
    }else{
      return false;
    }
  }