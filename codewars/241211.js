//문제
// 숫자열이 있으며 숫자열중에 끝자리 0만을 없애야 한다.
// 여기서 끝자리에 붙은 0을 어떻게 감지하지????

// 우선 if 문을 for문을 사용해보자!!!

// 만약 ...length가 3이상이고...

// 경우의 수 >  10  100 105 1000  

// 1번 숫자를 배열로 변경
// 배열의 길이가 2개
// 2번 배열의 두번째 index가 0 이어야하며 세번째이상의 index가 0이 아닐 때
// 	3번 세번째 인덱스 이후를 삭제 .pop()

// 4번째 두번째 index 그리고 3번째 이상의 index가 0일 때는 모든 0을 삭제.
// 	배열을 다시 map을 돌린 후 그 결과값에서 0을 replce 한 후
// 	최종 값을 숫자로 반환하기.

// 그런데.....잠깐 새로운 경우의 수 >>> 13040085000008500000
// 배열 길이의 마지막 인덱스가  0일때 그 이후를 .....지워라...
// 0이 언제 몇번째에 들어가는지 불규칙 적임....원점으로 돌아옴.

// 반복문,,,,,,,,,,,,얼마나 가지고 있는지를 모르니
// 무한대로 배열을 돌려야하니... 무한대 while(true)를 성립시켜서 돌리자!!!

function noBoringZeros(n) {
  //const changeString = String(n);
  // 숫자를 문자열로 변경 :숫자를 바로 배열로 변경 시 통으로 변경되어서 인덱스 1개 됨.
  // 문자열을 배열로 전환

  // 어라 생각해보니 while문은 내가 가진 배열을 
  // 하나하나 꺼내주는게 아님..그래서 console.log에 
  // [object Array] (3)
  // ["1","0","0"] 가 찍힘...........................

  // 때문에 for의 반복문으로 나를 하나하나 돌려주어야함..
  // 배열을 뒤집어서 하나하나씩 돌리는데 
  // 0이 아니면 멈추고 
  // 다시 배열을 뒤집어서 숫자열로 변환!!!!!
  const changeString = String(n);
  const newArray = Array.from(changeString);
  let reverseArray = newArray.reverse();
  
  for(let i= 0; i<=reverseArray.length; i++) {
    if(reverseArray[i] !== "0") {
      console.log(i);
      const cutArray = reverseArray.slice(i); 
      const againReverse = cutArray.reverse();
      const reChangeString =  String(againReverse);
      const deleteArray = reChangeString.replace(/,/g, '')
      const end2 = Number(deleteArray);
      console.log(end2);

      return end2;
    }
  }

}
noBoringZeros(100);

// function noBoringZeros(n) {
//   return Number(String(n).replace(/0+$/,''));
// }

// function noBoringZeros(x) {
//   let a = `${x}`.split('');
//   for(let i = a.length -1; i >= 0; i--){
//     if (a[i] == 0){
//         a.pop()
//     }else{
//         break
//     }
//   }
// return Number(a.join(''))
// }

