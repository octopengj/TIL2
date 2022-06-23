function f3(a) {
  return a * 38;
}

console.log(f3(10)); // 380
console.log(f3('Kim') + 1) // NaN




function f4(a: number) {
  if (a > 0){
    return a * 38;
  } // 양수의 값이 아니면 리턴하지 못하고 undefined
}

console.log(f4(10)); // 380
console.log(f4(-3) + 1); // NaN // undefined + 1 




function f5(a: number) {
  if (a > 0 ) {
    return a * 38;
  }
}

console.log(f5(10));
console.log(f5(-5) + 1); // f5(-5)에러 // Object is possibly 'undefined'



function f6(a: number): number {
  if (a > 0 ) {
    return a * 38;
  }
}



function f7(a) {
  return `이름은 ${a.name}이고, 나이는 ${a.age}입니다`;
}

console.log(f7({name: 'Kim', age: 10})); //이름은 Kim이고, 나이는 10입니다
console.log(f7('Kim')); // 이름은 undefined이고, 나이는 NaN입니다



function f8(a: {name: string; age: number}): string {
  return `이름은 ${a.name}이고, 나이는 ${a.age}입니다`;
}

console.log(f8({name: 'Kim', age: 10})); //이름은 Kim이고, 나이는 10입니다
console.log(f8('Kim')); // error // 'string' 형식의 인수는 '{ name: string; age: number; }' 형식의 매개 변수에 할당될 수 없습니다.



interface PersonInterface {
  name: string;
  age: number;
}

type PersonTypeAlias = {
  name: string;
  age: number;
}

function f9(a: PersonInterface): string {
  return `이름은 ${a.name}이고, 나이는 ${a.age}입니다`;
}

console.log(f9({name: 'Kim', age: 10})); //이름은 Kim이고, 나이는 10입니다
console.log(f9('Kim')); //error //'string' 형식의 인수는 'PersonInterface' 형식의 매개 변수에 할당될 수 없습니다.