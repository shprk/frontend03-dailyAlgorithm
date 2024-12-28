// Find the stray number
function stray(numbers) {
  let big = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        big = numbers[j];
        continue;
      } else {
        if (numbers[j] === numbers[j + 1]) {
          return numbers[i];
        } else if(numbers[i] === numbers[j + 1]) {
          return numbers[j];
        }
      }
      if (big) {
        if (big !== numbers[j]) {
          return numbers[j];
        }
      }
    }
  }
}
