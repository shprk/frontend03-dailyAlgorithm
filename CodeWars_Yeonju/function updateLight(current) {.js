function updateLight(current) {
  //your code here!
  console.log(current);
    if (current === "green") { // current가 콘솔에 찍힌 것이 정답일거란 추론은 금지
      return "yellow";
    } else if (current === "yellow"){
      return "red";
    } else if (current === "red") {
      return "green";
    }
}