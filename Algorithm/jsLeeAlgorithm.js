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

  // 2024.12.05. - 1년부터 100년까지가 1세기일 때, year에 따라 몇세기인지 출력하라(1시간 넘게 걸림..)

  function century(year) {
    for (let i = 1; i < 1000; i++) {
      if (i <= year && year <= i*100) {
        return i;
      }
    }
   }

   // 2024.12.06. - 배열에서 양의 정수만 골라내서 배열로 반환하라

   function filter_list(l) {
    const arr = [];
    for (let i = 0; i < l.length; i++) {
      if((l[i] >= 0) && (typeof(l[i])) === "number") {
        arr.push(l[i]);
      }
    }
    return arr;
  }

  // Number of People in the Bus(문제 제목)

  var number = function(busStops) {
    let input = 0;
    let output = 0;
    for (let i = 0; i < busStops.length; i++) {
      input = input + busStops[i][0];
      output = output + busStops[i][1];
    }
    return input - output;
  }
