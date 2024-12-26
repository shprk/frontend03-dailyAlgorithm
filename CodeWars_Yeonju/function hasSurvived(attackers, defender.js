function hasSurvived(attackers, defenders){
  let Arraylength = attackers.length + defenders.length;
  
  let attackSurvivors = 0;
  let defendersSurvivors = 0;
  let attackNum = 0; // 둘 중 누적된 값이 더 큰애가 이긴다. 
  let defenderNum = 0; // 만약 둘다 합한 값이 같으면 true 다르면 false
  
  // 초기값을 구해주는 식
  attackers.forEach(function(item) {
    attackNum += item;
  });
  defenders.forEach(function(item) {
    defenderNum += item;
  });

  // 공격과 방어 배열의 길이를 비교하여 서바이벌 점수 구해주는 식
  for (let i = 0; i < Arraylength; i++) {
    if (attackers[i] > defenders[i]) {
      attackSurvivors = attackSurvivors + 1;
    }
    if (defenders[i] > attackers[i]) {
      defendersSurvivors = defendersSurvivors + 1;
    }
    //값이 같으면 소멸 결국 서바이벌 점수가 안 올라간다는 의미는 0을 더해줌 조건문을 쓰나 마나
//     if (defenders[i] === attackers[i]) {
//       defendersSurvivors = defendersSurvivors + 0;
//       attackSurvivors = attackSurvivors + 0;
//     }
  }
  
  if (defendersSurvivors < attackSurvivors) {
    return false;
  }
  if (defendersSurvivors > attackSurvivors) {
    return true;
  }
  if (defendersSurvivors === attackSurvivors) {
    if (attackNum > defenderNum) {
      return false;
    } 
    if (defenderNum >= attackNum) {
      return true;
    }
  } 
}
