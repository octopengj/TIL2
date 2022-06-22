let myName: string = null; // myName에 에러 
let yourName: string = undefined // youName에 에러
//tsconfig.json파일의 stricNullChecks: true

let u: undefined = null; // u에 에러
//undefined에 null이 들어올 수 없다. 

let v: void = void; // ;에 에러
// void는 타입으로만 존재 
//let v: void = 이자리에 값이 들어와야 한다.
//let v: void = undefined;는 들어갈 수 있다.

let union: string | null = null;
union = 'Kim';
// 이런 union 표현은 가능하다.