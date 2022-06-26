interface HelloPerson {
  (name: string, age?: number): void;
}
// age는 number | undefined이다.
const helloPerson: HelloPerson = function(name: string) {
  console.log(`안녕 ${name}`);
}

helloPerson('Lee');
helloPerson('Lee', 10);

// ------------------------------------------------------------
// sup가 sub에 들어갈 수 없다.
// helloPerson은 인터페이스인 HelloPerson과 비교를 한다. 
// 함수 구현문과 비교하는 것이 아니다. 

const helloPerson1: HelloPerson = function(name: string, age: number) {
  console.log(`안녕 ${name}`);
}
// helloPerson1에 에러
// 함수 구현문에서는 age가 항상 number로 되어 있기 때문에 에러가 발생한다.

helloPerson1('Lee');
helloPerson1('Lee', 10);

// sub가 sup에 들어갈 수 있으니 helloPerson2에 에러가 사라진다.
const helloPerson2: HelloPerson = function(name: string) {
  console.log(`안녕 ${name}`);
}

helloPerson2('Lee');
helloPerson2('Lee', 10);
// 함수 구현문에 age가 없더라고 인터페이스와 비교하기 때문에 문제 없다.