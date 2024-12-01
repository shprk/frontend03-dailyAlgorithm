// 2024.12.02. - 정수가 짝수일 때 Even, 홀수일 때 Odd을 출력하게 하라

function evenOrOdd(number) {
    if (number % 2 === 0) {
      number = "Even";
    } else {
      number = "Odd";
    }
    return number;
  }