function updateLight(current) {
  //your code here!
  console.log(current);
    if (current === "green") {
      return "yellow";
    } else if (current === "yellow"){
      return "red";
    } else if (current === "red") {
      return "green";
    }
}