function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 같은 로직을 반복하는 함수들

function hello(message: any): any {
  return message;
}

console.log(hello('hello').length);  // 'hello'의 length는 any
console.log(hello(10).length); // 10의 length도 any


function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric('hello').length);
// length를 확인해보면 (property) String.length: number
// 여기서 helloGeneric은 
// function helloGeneric<"hello">(message: "hello"): "hello"

console.log(helloGeneric(10).length);
// length 에러 // '10' 형식에 'length' 속성이 없습니다.
// 여기서 helloGeneric은
// function helloGeneric<10>(message: 10): 10

console.log(helloGeneric(true));
// 여기서 helloGeneric은
// function helloGeneric<true>(message: true): true