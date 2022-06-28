function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>('hello'); // 타입 직접 지정
// 다른 값이 들어오면 에러

helloBasic('hello'); // 타입 추론



// -----------------------------------------------

function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>('hello', 10); // 타입 직접 지정
// 다른 값이 들어오면 에러

helloBasic('hello', 10); // 타입 추론