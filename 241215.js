// Multiples of 3 or 5
function solution(number){
  let sum = 0;
  if(number > 0){
    for(let i = 1; i < number; i++){
      if((i%3 === 0) || (i%5 === 0)) {
        sum += i;
      }
    }
    return sum;
  } else {
    return 0;
  }
}

//Who likes it?
function likes(names) {
  if(names.length === 0) {
    return "no one likes this";
  } else if(names.length === 1) {
    return `${names[0]} likes this`;
  } else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`;
  } else if(names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if(names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}