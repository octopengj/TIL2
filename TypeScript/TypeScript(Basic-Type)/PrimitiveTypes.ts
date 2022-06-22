//오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
  booleand
  number
  string
  symbol
  null
  undefined

//리터럴 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.
  true;
  'hello';
  1.11;
  null;
  undefined;

  

//래퍼 객체로 만들 수 있다. (타입스크립트에서 권장 사항 아니다.)

  new Boolean(false);  // typeof new Boolean(false): 'object'
  new String('hello'); // typeof new String('hello'): 'object'
  new Number(10);    // typeof new Number(10): 'object'
 
//타입을 나타낼때 대문자 사용이 권장되지 않는다.