function returnAny(message): any { // message에 에러

  console.log(message);
}

const any1 = returnAny('아무거나');

any1.toString();
// 이런식으로 사용은 가능하나

// message에 들어오는 값이 정말로 any일 경우 사용

function returnAny1(message: any): any {

  console.log(message);
}

const any2 = returnAny1('아무거나');

any2.toString();



let looselyType: any = {};

const abc = looselyType.a.b.c.d; 
// 이런식으로 사용해도 전혀 에러가 발생하지 않는다.


function leakingAny(obj: any) {
  const a = obj.num; // a: any
  const b= a + 1;
  return b; // b: any
}

const c = leakingAny({num: 0}); // c: any
// a, b, c 모두 any가 된다.

// 이 경우 any 전파를 막으려면 타입을 지정해줘야 한다.
function leakingAny(obj: any) {
  const a: number = obj.num; // a: number
  const b= a + 1;
  return b; // b: number
}

const c = leakingAny({num: 0}); // c: number