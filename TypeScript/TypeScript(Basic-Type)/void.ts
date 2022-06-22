function returnVoid(message: string) { 
  //function returnVoid(message: string): void
  console.log(message);

  return;
}

const r = returnVoid('리턴이 없다'); // const r: void
// r: viod이니 할당할 필요도 없다. 이런식으로 사용 할 수가 없다.


// void 지정하면 명시적으로 아무런 행위를 하지 않는다는 것을 표현

function returnVoid(message: string): void { 
  console.log(message);

  return;
}

 returnVoid('리턴이 없다'); 

 // 자바스크립트 특성 때문에 return 뒤에 유일하게 들어갈 수 있는 값은
 // undefined이다.