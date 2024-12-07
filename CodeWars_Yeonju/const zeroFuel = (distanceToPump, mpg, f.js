const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO 마일, 갤런, 
  if (distanceToPump / mpg <= fuelLeft) { // 예제문제 집착하지말기
    return true
  } else {
    return false
  } 
};