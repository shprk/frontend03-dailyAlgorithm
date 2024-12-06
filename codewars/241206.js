function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // 01 아직 남은 파란구슬을 뽑을 확률을 구해야함.
  // 02 총 구슬의 갯수에서 뽑고 남은 구슬을 만든다.
  // 03 총 남은 구슬의 갯수에서 뽑지 않은 파란구슬의 갯수를 구한다.
  // 04 확률을 알기 위해 총 남은 구슬의 갯수에서 뽑지 않은 파란 구슬을 나눈다!
  // 작업 총평>> 문제를 있는 그대로 분석하자.
  
  const allMables = blueStart + redStart; //총 구슬의 갯수
  const pickAllMables = bluePulled + redPulled; // 뽑은 구슬의 갯수
  
  const restMables = allMables - pickAllMables; // 남은 총 구슬의 갯수
  const restBlueMables = blueStart - bluePulled; //남은 파란 구슬의 갯수
  
  if(bluePulled <= blueStart){
    const calculate = restBlueMables / restMables

    return calculate;
  }

}