// 파일 작성 예시
// Are You Playing Banjo? 문제
function areYouPlayingBanjo(name) {
  if(name[0] === "R" || name[0] === "r"){
    return `${name} plays banjo`;
  }else{
    return `${name} does not play banjo`;
  }
}