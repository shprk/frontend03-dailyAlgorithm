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

  // 2024.12.07.

  function findNeedle(haystack) {
    for (let i = 0; i <haystack.length; i++) {
      if(haystack[i] === "needle") {
        return `found the needle at position ${i}`;
      } else {
         "Nothing";
      }
    }
  }

  // 문자열의 모음을 모두 제외하라
  function disemvowel(str) {
    let a = "a";
    let A = "A";
    let o = "o";
    let O = "O";
    let u = "u";
    let U = "U";
    let i = "i";
    let I = "I";
    let e = "e";
    let E = "E";
    let arr = Array.from(str);
    for (let j = 0; j < arr.length; j++) {
      if(arr[j] === a) {
        delete arr[j];
      }
       if(arr[j] === A) {
        delete arr[j];
      }
       if(arr[j] === o) {
        delete arr[j];
      }
       if(arr[j] === O) {
        delete arr[j];
      }
       if(arr[j] === e) {
        delete arr[j];
      }
       if(arr[j] === E) {
        delete arr[j];
      }
       if(arr[j] === i) {
        delete arr[j];
      }
       if(arr[j] === I) {
        delete arr[j];
      }
       if(arr[j] === u) {
        delete arr[j];
      }
       if(arr[j] === U) {
        delete arr[j];
      }
    }
    let strr = arr.join('')
    return strr;
  }

  // 2024.12.08. - 양수의 갯수와 음수의 합이 담긴 배열을 출력하라

  function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) {  //input이 null 또는 빈배열일 때 빈 배열을 반환하라 추가함
      return [];
    }

    let numCount = 0;
    let numSum = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        numCount += 1;
      } else if (input[i] <= 0) {
        numSum = numSum + input[i];
      } else {
        return [];
      }
    }
    return [numCount, numSum];
  }

    // 2024.12.09. - 제곱의 합

    function squareSum(numbers){
      let sum = 0;
      if(numbers.length === 0) {
        return 0;
      }
     for (let i = 0; i < numbers.length; i++) {
       sum = sum + numbers[i]*numbers[i];
     }
      return sum;
    }

    // 주어진 문자열 중 모음의 개수

    function getCount(str) {
      let result = 0;
      for (const element of str) {
        if (element === 'a') {
          result++;
        } else if (element === 'u') {
          result++;
        } else if (element === 'e') {
          result++;
        } else if (element === 'i') {
          result++;
        } else if (element === 'o') {
          result++;
        }
      }
      return result;
    }

    // 2024.12.10. - 제곱의 나열

    function squareDigits(num){
      let str = String(num);
      const arr = Array.from(str);
      const newArr = [];
        arr.forEach(element => {
          let multi = element*element;
          newArr.push(multi);
        })
      let newStr = newArr.join("");
      return Number(newStr);
    }

    // 문자열로 주어진 numbers의 최대값, 최소값을 구하라

    function highAndLow(numbers){
      let str = numbers.replaceAll(' ', ',');
      const arr = str.split(',');
      const numArr = [];
      for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        numArr.push(num);
      }
      
      let max = numArr[0];
      let min = numArr[0];
      for (let j = 1; j < numArr.length; j++) {
        if (numArr[j] >= max) {
          max = numArr[j];
        } else if (numArr[j] < min) {
          min = numArr[j];
        }
      }
      return `${max} ${min}`
    }

    // 2024.12.11. 내림차순

    function descendingOrder(n){
      const str = String(n);
      const arr = Array.from(str);
      const newArr = [];
      const array = arr.map(el => Number(el))

      loof(array);
      function loof (array) {
        if (array.length !== 0) {
          let max = array[0];
          array.forEach(element => {
          if (element >= max) {
            max = element;
          }})
          newArr.push(max);
          const loofarr = array.filter(others => others < max); //요소에 중복인 경우를 해결못함(무한으로 재귀됨)
          loof(loofarr);
        } else if (array.length === 0) {
          return;
        }
      }
      return Number(newArr.join(''));
    }

    //버블정렬 사용(수보님이 알려줘서 좀 찾아보고 작성한 코드임

    function descendingOrder(n){
      const str = String(n);
      const arr = Array.from(str);
      const array = arr.map(el => Number(el))

      for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
          if(array[j] < array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
        }
      }
      return Number(array.join(''));
    }

    // 2024.12.12. 홀/짝일 때 구분하여 조건에 맞는 문자열 추출

    function getMiddle(s) {
      const arr = Array.from(s);
      for(let i = 0; i < arr.length; i++) {
        if (arr.length % 2 === 0) {
          return arr[(arr.length/2)-1] + arr[arr.length/2];
        } else if (arr.length % 2 === 1) {
          return arr[Math.floor(arr.length/2)];
        }
      }
    }

    // 제곱근 찾기

    var isSquare = function(n){
      if(n < 0) {
        return false;
      }

      let num = 0;
      for(let i = 0 ; i <= n; i++) { //큰 숫자가 들어가면 for문이라 작업시간이 길어지는 코드임
        if (i*i === n) {
          num = i;
        }
      }
      if(num*num === n) {
        return true
      } else {
        return false
      }
    }

    var isSquare = function(n){ // 메소드를 활용해서도 풀어봄
      if (n < 0) {
        return false;
      }
      
      let a = Math.sqrt(n);
      if ((a % 1 === 0) && (a*a === n)) {
        return true;
      } else {
        return false;
      }
    }

    // 2024.12.14 - 2048게임(3시간 걸림)

    function merge(line) {
      const result = [];
      let sum = 0;
      const newLine = [];

       line.forEach(el => {
        if(el !== 0) {
          newLine.push(el);
        }
      })

      for (let z = 1; z = (line.length - newLine.length); z++) {
        newLine.push(0);
      }

      for (let i = 0; i < newLine.length; i++) {
          if (newLine[i] === newLine[i+1]) {
            sum = newLine[i] + newLine[i+1];
            newLine[i] = sum;
            newLine[i+1] = 0;
            }
        }

      newLine.forEach(ele => {
        if(ele !== 0) {
          result.push(ele);
        }
      })
      for (let z = 1; z = (newLine.length - result.length); z++) {
        result.push(0);
      }
      return result;
    };

    // 2024.12.15. 주어진 범위 내 3,5의 배수의 합 구하기
    function solution(number){
      const arr = [];
      let sum = 0;

      for (let i = 0; i < number; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
          arr.push(i);
        }
      }

      arr.forEach(ele => {
        sum = sum + ele;
      })
      return sum;
    }

    //2024.12.16 - Looking for a benefactor

    function newAvg(arr, newavg) {
    let sum = 0;

    arr.forEach(ele => {
      sum = sum + ele;
    })

    let result = newavg*(arr.length+1) - sum;

    if (result <= 0) {
      throw new Error('Expected New Average is too low');
    } else {
      return Math.ceil(result);
    }
  }

  //2024.12.17. - Return substring instance count

  function solution(fullText, searchText){
    const fullArr = Array.from(fullText);
    const searchArr = Array.from(searchText);
    const newArr = [];

    for (let i = 0; i < fullArr.length; i++) {
      let j = 0;
      if (fullArr[i] === searchArr[j]) {
        newArr.push(fullArr[i]);
        j++
      }
    }
    return newArr.length/searchText.length;
  }

  // Responsible Drinking

  function hydrate(s) {
    const arr = Array.from(s)
    let sum = 0;
    arr.forEach(ele => {
      if(isNaN(ele) === false) {
        let num = Number(ele);
      sum = sum + num;
    }
    })
    if (sum === 1) {
    return `${sum} glass of water`;
    } else {
      return `${sum} glasses of water`
    }
  }

  //2024.12.18. - String ends with?

  function solution(str, ending){
    let num = str.length - ending.length;
    const arr = [];

    for (let i = num; i < str.length; i++) {
      arr.push(str[i]);
    }

    if (arr.join('') === ending) {
      return true
    } else {
      return false;
    }
  }

  //2024.12.19. - Stop gninnipS My sdroW! - 조건걸때 두루뭉술하게 생각하지 말고 정확하게 생각하고 적자

  function spinWords(string) {
    const arr = string.split(" ");
    let newStr = ""
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length <= 4) {
        newStr = newStr + arr[i] + " ";
      } else if (arr[i].length >= 5) {
        const newArr = Array.from(arr[i]);
        const newArr2 = [];
        for (let j = newArr.length - 1; j >= 0; --j) {
          newArr2.push(newArr[j])
        }
        const reverse = newArr2.join('');
        newStr = newStr + reverse + " ";
        }
    }
      return newStr.trim();
  }

  //2024.12.20. - Array.diff

  function arrayDiff(a, b) {
    const newArr = [];
    if (a.length === 0) {
      return newArr;
    } else if (b.length === 0) {
      return a;
    }

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            a[i] = "";
        }
      }
    }

    a.forEach(ele => {
      if (ele !== "") {
        newArr.push(ele)
      }
    })
    return newArr;
  }

  //Moving Zeros To The End

  function moveZeros(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if( arr[i] !== 0) {
        newArr.push(arr[i])
      }
    }
    for (let j = 0; j = arr.length - newArr.length; j++) {
      newArr.push(0)
    }
    return newArr;
  }
