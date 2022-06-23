## Type System

## 1. 작성자와 사용자의 관점으로 코드 바라보기

#### 타입시스템

- 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템

- 컴파일러가 자동으로 타입을 추론하는 시스템

#### 타입스크립트의 타입 시스템

- 타입을 명시적으로 지정할 수 있다.

- 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 추론

#### 타입이란 해당 변수가 할 수 있는 일을 결정한다.

```typescript
function f3(a) {  // a는 any로 추론된다.
  return a * 38;
}

console.log(f3(10)); // 380
console.log(f3('Kim') + 1) // NaN
```

이런 형태를 작성하지 못하게 하는 옵션이 있다.

noImplicitAny 옵션을 키면 타입을 명시적으로 지정하지 않은 경우,

타입스크립트가 추론 중 any라고 판단하게 되면 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다.

<u>*noImplicitAny를 키면*</u>

```typescript
Parameter 'a' implicitly has an 'any' type. 에러를 발생시킨다.
```

**매개변수의 타입을 명시적으로 지정하고 타입은 number일 경우**

```typescript
function f4(a: number) {
  if (a > 0){
    return a * 38;
  } // 양수의 값이 아니면 리턴하지 못하고 undefined
}

console.log(f4(10)); // 380
console.log(f4(-3) + 1); // NaN // undefined + 1 
```

undefined는 number가 아니다.

타입스크립트에서는 undefined를 number로 퉁쳐버리는 경우가 있다.

*<u>이 경우 strictNullChecks 옵션을 키면</u>*

모든 타입에 자동으로 포함되어 있는 null과 undefined를 제거해준다.

**number | undefined 타입으로 추론된 리턴 타입**

- 매개변수의 타입은 명시적으로 지정

- 명시적으로 지정하지 않은 리턴타입은 number | undefined로 추론된다.

```typescript
function f5(a: number) {
  if (a > 0 ) {
    return a * 38;
  }
}

console.log(f5(10));
console.log(f5(-5) + 1); // f5(-5)에러 // Object is possibly 'undefined'
```

해당 함수의 리턴 타입은 number | undefined이기 때문에 이어진 연산을 바로 할 수 없다.

a는 런타임에 어떤 값이 들어올지 컴파일 때 알 수 없다.

런타임상에서 결과물이 undefined인 경우 error를 throw한다는 방식으로 막고

 number일 경우에 number에 관련한 연산을 하도록 작성하는 것이 타입스크립트의 방식이다.

****명시적으로 리턴타입을 지정****

```typescript
function f6(a: number): number { // number 에러 발생
// 함수에 끝 return 문이 없으며 반환 형식에 'undefined'가 포함되지 않습니다.
  if (a > 0 ) {
    return a * 38;
  }
}
```

실제 함수 구현부의 리턴타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러가 발생한다. (if는 리턴을 하지만 함수에는 리턴이 없다.)

*<u>noImplicitReturns 옵션을 키면</u>*

함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.

모든 코드에서 리턴을 직접해야한다.

**매개변수에 object가 들어오는 경우**

```typescript
function f7(a) {
  return `이름은 ${a.name}이고, 나이는 ${a.age}입니다`;
}

console.log(f7({name: 'Kim', age: 10})); //이름은 Kim이고, 나이는 10입니다
console.log(f7('Kim')); // 이름은 undefined이고, 나이는 NaN입니다
```

**object literal type**

```typescript
function f8(a: {name: string; age: number}): string {
  return `이름은 ${a.name}이고, 나이는 ${a.age}입니다`;
}

console.log(f8({name: 'Kim', age: 10})); //이름은 Kim이고, 나이는 10입니다
console.log(f8('Kim')); // error 
// 'string' 형식의 인수는 '{ name: string; age: number; }' 형식의 매개 변수에 할당될 수 없습니다.
```

매번 이런식으로 작성하는 것이 번거로워 나만의 타입을 만들어서 사용한다.

```typescript
function f9(a: PersonInterface): string {
  return `이름은 ${a.name}이고, 나이는 ${a.age}입니다`;
}

console.log(f9({name: 'Kim', age: 10})); //이름은 Kim이고, 나이는 10입니다
console.log(f9('Kim')); //error //'string' 형식의 인수는 'PersonInterface' 형식의 매개 변수에 할당될 수 없습니다.
```

## 2. Structural Type Systme vs Nominal Type System

타입스크립트는  structurla type system을 따른다.

#### structural type system - 구조가 같으면, 같은 타입이다.

```typescript
interface Iperson {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};

let personInterface: Iperson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;
```

#### nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다.

```typescript
type PersonID = string & { readonly brand: unique symbol};

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-aaa'));
getPersonById('id-aaa');  // 'id-aaa'에러
/*
'string' 형식의 인수는 'PersonID' 형식의 매개 변수에 할당될 수 없습니다.
  'string' 형식은 '{ readonly brand: unique symbol; }' 형식에 할당할 수 없습니다.ts(2345)
*/
```

## 3. 타입호환성(Type Compatibility)

**서브타입**

```typescript
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1; // error

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2; // error

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
sub3 = sup3; // error

// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;  // any에서는 문제가 발생하지 않는다.

// sub5 타입은 sup5 타입의 서브 타입이다.
let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5; // error

// sub 6 타입은 sup6 타입의 서브 타입이다.
class Animal {}
class Dog extends Animal {
  eat() {}
}

let sub6: Dog = new Dog();
let sup6: Animal = sub6;
sub6 = sup6; //error
```

**같거나 서브 타입인 경우, 할당이 가능하다. =>공변**

```typescript
//primitive type
let sub7: string = '';
let sup7: string | number = sub7;

//object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: {a: string; b: number} = {a: '', b: 1};
let sup8: {a: string | number; b: number} = sub8;

// array - object 와 마찬가지
let sub9: Array<{a: string; b: number}> = [{a: '', b: 1}];
let sup9: Array<{a: string | number; b: number}> = sub9;
```

**함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. =>반병**

```typescript
class Person{}
class Developer extends Person{
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

//Developer => Developer 에다가 Developer => Developer를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

//Developer => Developer 에다가 Person => Developer를 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

//Developer => Developer 에다가 StartupDeveloper => Developer를 할당하는 경우
tellme(function sToD(d: StartupDeveloper): Developer{  // sToD에러
  return new Developer();
});
//'(d: StartupDeveloper) => Developer' 형식의 인수는 '(d: Developer) => Developer' 형식의 매개 변수에 할당될 수 없습니다.
```

strictFunctionType 옵션이 꺼져있으면 맨 아래의 경우(//Developer => Developer 에다가 StartupDeveloper => Developer를 할당하는 경우)에는 타입스크립트의 융통성이 발생하여 에러가 발생하지 않는다.



## 4. 타입별칭(Type Alias)

- interface랑 비슷해 보인다.

- primitive, union type, tuple, function을 다른이름으로 부르기 위해 사용한다.

- 기타 직접 작성해야하는 타입을 다른 이름으로 지정할 수 있다.

- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아니다.
  
  

**Aliasing Primitive**

```typescript
type MyStringType = string;

const str = 'world';

let mystr: MyStringType = 'hello';
mystr = str;
```



**Aliasing Union Type**

```typescript
let person: string | number = 0;
person = 'Kim';

type StringNumber = string | number;

let another: StringNumber = 0;
another = 'Lee';
```



**Aliasing Tuple**

```typescript
let person1: [string, number] = ['Kim', 10];

type PersonTuple = [string, number];

let another1: PersonTuple = ['Lee', 10];
```



**Aliasing Function**

```typescript
type EatType = (food: string) => void;
```


