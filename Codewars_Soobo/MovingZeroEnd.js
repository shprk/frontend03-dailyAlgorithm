/**
 * 5kyu - 배열에서 존재하는 0을 찾아 모두 뒤로 옮기는 문제
 */
function moveZeros(arr) {
  let zeroCount = [];

  const zeroDiff = arr.filter((val) => {
    if (val === 0) {
      zeroCount.push(val);
    } else {
      return true;
    }
  })

  return [...zeroDiff, ...zeroCount];
}

/**
 * 다음으로 개선이 가능할 듯
 */
function moveZeros(arr) {
  return [
    ...arr.filter(val => val === 0),
    ...arr.filter(val => val === 0)
  ];
}
