## Basic Type

### Type Annotation

타입스크립트 고유의 기능

```typescript
let a: string = 'Type'; // a의 타입을 string으로 설정
let b: string = 20; // b의 타입을 string으로 설정 -> b에 에러발생

a = 30; // a에 에러발생 string만 들어올 수 있는데 number가 들어와서 에러
b = 30; 
```

```typescript
function hello(b: number) {

}
hello('Type'); // 'Type에 에러 발생 number만 들어갈 수 있다.'
```

### 1.  TypeScript Types vs JavaScript Types

TypeScript는 Static Types(set during development)라고 하고 JavaScript는 Dynamic Types(resolved at runtime)라고 한다.

- 간단한 예시
  
  ```typescript
  // JavaScript
  function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      throw new Error('Incorrect input!');
    }
    return n1 + n2
  }
  
  const result = add(10, 20)
  
  //TypeScript
  function add1(n1: number, n2: number) {
    return n1 + n2;
  }
  
  const result1 = add(10, 20);
  ```
  
  가장 간단한 데이터 단위로 작업 할 수 있어야한다.
  
  - 타입스크립트에서는 자바스크립트와 동일한 타입을 지원하고 추가적으로 열거 타입이 제공된다.
  
  - 자바스크립트 기본 자료형
    
    - boolean, number, string , null, undefined, symbol, array
  
  - 추가 타입
    
    - any, void, never, unknown, enum , tuple:object 형

### 2. Primitive Types

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
  
  - booleand
  
  - number
  
  - string
  
  - symbol
  
  - null
  
  - undefined
  
  ```typescript
  let name = 'Type';
  name.toString();
  ```

- 리터럴 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.
  
  ```typescript
  true;
  'hello';
  1.11;
  null;
  undefined;
  ```

- 래퍼 객체로 만들 수 있다. (타입스크립트에서 권장 사항 아니다.)
  
  ```typescript
  new Boolean(false);  // typeof new Boolean(false): 'object'
  new String('hello'); // typeof new String('hello'): 'object'
  new Number(10);    // typeof new Number(10): 'object'
  ```
  
  타입을 나타낼때 대문자 사용이 권장되지 않는다.

### 3. boolean

```typescript
let isDone: boolean = false;

isDone = true;

console.log(typeof isDone); // boolean

let isOk: Boolean = true;
// 직접 리터럴 값으로 primitive타입의 값을 사용한다.

let isNotOk: boolean = new Boolean(true); // isNotOk에 오류가 발생한다. 
/* 
오류코드
'Boolean' 형식은 'boolean' 형식에 할당할 수 없습니다.
 boolean'은(는) 기본 개체이지만 'Boolean'은(는) 래퍼 개체입니다. 가능한 경우 'boolean'을(를) 사용하세요.
*/
```

### 4. number

JavaScript와 같이 TypeScript의 모든 숫자는 부동 소주점 값

```typescript
let decimal: number = 1; // 10진수

let hex: number = 0xf00d; // 16진수

let binary: number = 0b1010; // 2진수

let octal: number = 0o744; // 8진수

let notANumber: number = NaN; // NaN

let underscoreNum: number = 1_000_000; // 1,000,000
```

### 5. string

- 큰 따옴표, 작은 따옴표를 사용

- 템플릿 리터럴 사용

```typescript
let myName: string = '이름';

let yourName: string = "네이름";

let temName: string = `나의 이름은 ${myName} 너의 이름은 ${yourName}`;
```

### 6. symbol

- Symbol을 함수로 사용해서 symbol 타입을 만들 수 있다.

- new Symbol로 사용 불가

- 프리미티브 타입의 값을 담아서 사용

- 고유하고 수정불가능한 값으로 만들어줌

- 주로 접근을 제어하는데 사용

```typescript
console.log(Symbol('foo') === Symbol('foo')); //false
------------------------------------------------------

const sym = Symbol();

const obj = {
  [sym]: 'value'
};

obj[sym]
```

함수로 사용할 때는 대문자 Symbol, 타입으로 사용할 때는 소문자 symbol

### 7. null & undefined

- null타입은 null만 값으로 가질 수 있다.

- 런타임에서 null의 typeof 는 object이다.

- 런타임에서 undefined의 typeof는 undefined이다.

```typescript
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
```

### 8. object

primitive type이 아닌 것을 나태내고 싶을 때 사용하는 타입

```typescript
const person1 = {name: 'Kim', age: 10};
/*
person1위에 마우스를 올리면 아래와 같이 오브젝트 리터럴 타입이 나온다.
const person1: {
  name: string;
  age: number;
}
*/
const person2 = Object.create({name: 'Kim', age: 10});
// Object 전역객체를 사용해서 만든다. 
/*
(method) ObjectConstructor.create(o: object | null): any (+1 overload)
*/
```

### 9. Array

- array는 객체

- 사용법
  
  - Array<타입>
  
  - 타입[]

```typescript
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

let list3: string[] = [1, 2, 3];// [1, 2, 3] 에러

let list4: string[] = ['Kim'];

let list5: (string | number)[] = [1, 2, 3, '4'];
```

Array<타입> 보다는 타입[] 형태로 사용하는 것을 권장 (jsx tsx에서 에러가 발생할 가능성)

### 10. Tuple

순서, 타입, 길이가 맞아야 한다.

```typescript
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
```

### 11. any

- 어떤 타입이어도 상관없는 타입

- 최대한 쓰지 않는게 좋다. 컴파일 타임에 타입체크가 정상적으로 이뤄지지 않는다.

```typescript
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
```

컴파일 옵션 중 any를 써야하는데 쓰지 않으면 오류를 내보내는 옵션도 있다.

- nolmplicitAny

any를 사용하게 될 경우 타입전파가 된다.

```typescript
let looselyType: any = {};

const abc = looselyType.a.b.c.d; 
// 이런식으로 사용해도 전혀 에러가 발생하지 않는다.
```

전파 방지

```typescript
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
```

unknown방식을 사용하는 것이 좋다.

### 12. unknown

- 모르는 변수의 타입을 묘사해야 할 때

- 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공한다.

```typescript
declare const maybe: unknown;

const aNumber: number = maybe; // aNumber 에러
// 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.

if (maybe === true) {
  const aBoolean: boolean = maybe;

  const aString: string = maybe; // aString 에러
  // 'boolean' 형식은 'string' 형식에 할당할 수 없습니다.
}

if (typeof maybe === 'string') {
  const aString: string = maybe;

  const aBoolean: boolean = maybe; // aBoolean 에러
  //'string' 형식은 'boolean' 형식에 할당할 수 없습니다.
}
```

### 13. never

- 일반적으로 return에 사용

```typescript
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('failed');
}

function infiniteLoop(): never {
  while(true) {
  }
}
```

- never 타입은 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.

- never에는 그 어떤 것도 할당할 수 없다.

- any도 never에 할당할 수 없다.

- 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.

```typescript
let a: string = 'hello';

if (typeof a !== 'string') {
  a; // let a: never
}


declare let b : string | number;

if (typeof b !== 'string') {
  b; // let b: number
}
```

```typescript
type Index<T> = T extends string ? T & {[index: string]: any} : never;

const c: Index<{}> = ''; // const c: never
// 'string' 형식은 'never' 형식에 할당할 수 없습니다.
```

### 14. void

- 어떤 타입도 갖지 않는 빈상태

- return 타입으로 사용

```typescript
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
```


