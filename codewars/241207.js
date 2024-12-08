function updateLight(current) {
    //your code here!
    //여러분은 마을의 신호등을 제어하는 코드를 작성하고 있습니다. 
    //녹색에서 노란색, 빨간색, 다시 녹색으로 변경될 때마다 이를 처리하는 함수가 필요합니다. 
    //조명의 현재 상태를 나타내는 문자열을 인수로 받아 
    //조명이 변경되어야 하는 상태를 나타내는 문자열을 반환하는 함수를 완성하세요. 
    //예를 들어 입력이 녹색이면 출력은 노란색이 되어야 합니다.  
    if( current === 'green'){
        return 'yellow'
    }else if(current === 'yellow'){
      return 'red'
    }else{
      return 'green'
    }
  
  }