## Generic

### 1. generic- any와 다른 점

같은 로직을 반복하는 함수들이 있을 때 여러 인자를 받고 여러가지 리턴을 할 때 

```typescript
function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 같은 로직을 반복하는 함수들
```

 이럴 때 사용하는 any가 있다. any를 사용하게 되면 의도한 바와 다른 결과를 가져오는 경우가 있다.

```typescript
function hello(message: any): any {
  return message;
}

console.log(hello('hello').length);  // 'hello'의 length는 any
console.log(hello(10).length); // 10의 length도 any
```

generic을 사용하면 들어오는 input에 따라 타입이 정해진다.

```typescript
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
```

### 2. generic basic

```typescript
function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>('hello'); // 타입 직접 지정
// 다른 값이 들어오면 에러

helloBasic('hello'); // 타입 추론
```

여러개를 넣을 수도 있다.

```typescript
function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>('hello', 10); // 타입 직접 지정
// 다른 값이 들어오면 에러

helloBasic('hello', 10); // 타입 추론
```

### 3. generic array & tuple

**array**

```typescript
function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(['hello', 'world']);
// function helloArray<string>(message: string[]): string

helloArray(['hello', 10]);
// function helloArray<string | number>(message: (string | number)[]): string | number
// 유니온타입처럼 된다.
```

**tuple**

```typescript
function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(['hello', 'world']);
// function helloTuple<string, string>(message: [string, string]): string

helloTuple(['hello', 10]);
// function helloTuple<string, number>(message: [string, number]): string
```

### 4. generic function

함수의 타입만 선언하는 방식

```typescript
// type alias
type FunctionGeneric1 = <T>(message: T) => T;

const function1: FunctionGeneric1 = <T>(message: T): T => {
  return message;
};

// interface
interface FunctionGeneric2 {
  <T>(message: T): T;
}

const function2: FunctionGeneric2 = <T>(message: T): T => {
  return message;
}
```

### 5. generic class

```typescript
class Person<T> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new Person('Kim');
// constructor Person<string>(name: string): Person<string>

new Person<string>('Kim');
new Person<number>('Kim');
// 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
```

```typescript
class Person2<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person2('Kim', 10);
// constructor Person<string>(name: string): Person<string>

new Person2<string, number>('Kim', 10);
new Person2<string, number>('Kim' 'k');
// 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
```

### 6. generic extends

extends를 상속이라는 개념보다는 제한을 걸어두는 개념으로 사용하면 된다.

```typescript
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('Kim');
new PersonExtends(10);
new PersonExtends(true);
// 'boolean' 형식의 인수는 'string | number' 형식의 매개 변수에 할당될 수 없습니다.
```

generic 보다 안전하게 사용하려면 extends를 사용해서 범위의 제한을 만드는 것이 좋다.

### 7. keyof & type lookup system

keyof 키워드와 generic을 이용해서 타입을 찾아내고 활용

컴파일 타임에 타입을 정확히 찾아내는 방식

```typescript
interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'Kim',
  age: 10
}

function getProp(obj: IPerson, key: 'name' | 'age'): string | number {
  return obj[key];
}

function setProp(obj: IPerson, key: 'name' | 'age', value: string | number) {
  obj[key] = value; // obj[key]에
  /*
  (parameter) key: "name" | "age"
  'string | number' 형식은 'never' 형식에 할당할 수 없습니다.
  'string' 형식은 'never' 형식에 할당할 수 없습니다.
  */
}
```

getProp에서 'name'를 넣으면 string 'age'를 넣으면 number가 되어야 하는데 

런타입에서 오류가 발생하지 않지만 'name'을 넣으면 string | number가 되고 'age'를 넣으면 string | number 가 되면서 타입관계에 오류가 있다. 

setProp도 똑같은 타입관계에 오류가 있다. + 에러발생



keyof는 keyof 키워드를 타입앞에 붙여서 새로운 타입을 만들어낸다.

IPerson 앞에 keyof를 붙여보면

```typescript
type Keys = keyof IPerson;

const keys: Keys = ''; //''이 자리에 'name' 혹은 'age'가 올 수 있다.
// 어떤 개체에 keyof를 붙이면 그 결과물이 타입으로 나오는데 
// 그 타입은 key의 이름으로 된 문자열의 유니온 타입으로 만들어진다.
```

keyof를 사용해서 코드를 적용하면

```typescript
// keyof를 적용하면 
function getProp(obj: IPerson, key: 'name' | 'age'): string | number {
   return obj[key];
}
// 아래와 같이 바꿀 수 있다.

function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
   return obj[key];
}
```

 하지만 getProp의 결과물은 다음과 같이 해석이 된다.

IPerson[keyof IPerson]

-> IPerson['name' | 'age']

-> IPerson['name'] | IPerson['age']

-> string | number

그래서 'name'이 들어가면 string, 'age'가 들어가면 number로 나오는 결과물이 아니다.

그 결과를 얻기 위해서는 generic을 사용해야 한다.

```typescript
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
// 여기서 K는 name 혹은 age가 된다.
```

확인을 해보면

```typescript
getProp(person, '')
// function getProp(obj: IPerson, key: 'name' | 'age'): string | number
```

' ' 이 자리에는 name 혹은 age만 들어가게 된다.

'name'을 입력하게 되면 결과물은 string이 된다.

```typescript
getProp(person, 'name');
// function getProp<IPerson, "name">(obj: IPerson, key: "name"): string
```



setProp 도 수정을 하면 obj[key] = value;의 에러가 사라진다.

```typescript
function setProp(obj: IPerson, key: keyof IPerson, value: string | number) {
  obj[key] = value; // obj[key]에
}


function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}
```



값을 입력해보면

```typescript
setProp(person, 'name', 'Lee');
// 'name'을 바꾸고 싶다면 
// setProp(obj: IPerson, key: "name", value: string): void
// 'age'를 바꾸고 싶다면
// setProp(obj: IPerson, key: "age", value: number): void
```


