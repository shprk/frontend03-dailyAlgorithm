// 2024.12.02. - 정수가 짝수일 때 Even, 홀수일 때 Odd을 출력하게 하라!!

function evenOrOdd(number) {
    if (number % 2 === 0) {
      number = "Even";
    } else {
      number = "Odd";
    }
    return number;
  }

  // 2024.12.03. - 7급 문제 홀수 삼각형 각 열의 합 구하기 실패!!!!!! - 3시간을 투자 후 실패....

  // 2024.12.04. - 배열의 요소중 최대값, 최소값을 제외한 나머지 요소의 합을 구하라
  //단, 매개변수로 null 또는 빈 배열을 받을 시, 0을 반환해야하며, 배열의 요소가 한개 또는 두개만 존재하여 최대값, 최소값으로 빠져서 빈배열이 된다면 0으로 반환되야 한다.

  //실패한 코드(시간이 너무 끌려서 중도 포기)
  function sumArray(array) {
    const newArr = [];
     if (array === null) {
       array = 0;
     } else if (array.length === 0) {
       array = 0;
     }
    let max = array[0];
    for (const m of array) {
      if (max < m === true) {
        //으음....
      }
    }
  }
