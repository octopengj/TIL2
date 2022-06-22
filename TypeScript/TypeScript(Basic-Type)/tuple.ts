let x: [string, number];

x = ['hello', 10];

// 순서도 맞아야하고 타입도 맞아야한다.

x = [10, 'hello']; // [10, 'hello']에 에러발생

// 길이도 맞아야 한다.

x[2] = "world"; // x[2]에 에러발생
/*
'"world"' 형식은 'undefined' 형식에 할당할 수 없습니다.ts(2322)
길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '2'에 요소가 없습니다.ts(2493)
*/
// x[0]은 string x[1]은 number x[2]는 undefined가 할당된다.


const person: [string, number] = ['Kim', 10];

const [first, second] = person; // 분해 할당 가능

const [first, second, third] = person; //[third]는 undefined자리라서 에러발생