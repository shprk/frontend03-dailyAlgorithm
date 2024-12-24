//일련의 숫자가 주어지면 각각의 덧셈과 뺄셈의 역을 반환합니다.
// //각각의 양수는 음수가 되고 음수는 양수가 됩니다.

//많은 리팩토링 과정을 겪었으며 자세한 사항은 노션에 기록함.

function invert(array) {
    for (let i=0; i<array.length; i++) {
        array[i] = array[i] * -1;
    }
   
    return array;
 }