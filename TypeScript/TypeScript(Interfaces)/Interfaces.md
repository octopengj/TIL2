## Interfaces

### 1. Interface

타입을 만들어 내는 방식

Interface 키워드로 된 문법은 컴파일 됐을 때는 사라진다.

컴파일 타임에만 필요하다. 



아래와 같은 코드를 

```typescript
function hello(person: {name: string; age: number}): void {
  console.log(`안녕 ${person.name}`);
}

const p: {name: string; age: number} = {
  name: 'Kim',
  age: 10
};

hello1(p);
```

인터페이스를 사용하면 아래와 같이 작성할 수 있다.

```typescript
interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕 ${person.name}`)
};

const p1: Person1 = {
  name: 'Kim',
  age: 10
}

hello1(p1);
```

컴파일을 한 js코드

```javascript
hello1(p);
function hello1(person) {
    console.log(`안녕 ${person.name}`);
}
;
const p1 = {
    name: 'Kim',
    age: 10
};
hello1(p1);
```





### 2. optional property

?를 어떤 개체에 프로퍼티가 있을 수도 있고 없을 수도 있는 상황에 사용

```typescript
interface Person2 {
  name: string;
  age?: number;  // 있을 수도 없을 수는 없는 ?
}

function hello2(person: Person2): void {
  console.log(`안녕 ${person.name}`);
}

hello2({name: 'Kim', age: 10});
hello2({name: 'Lee'});
```



인덱서블타입은 어떠한 이름의 프로퍼티가 와도 좋을 때 사용

```typescript
interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;  
}


function hello3(person: Person3): void {
  console.log(`안녕 ${person.name}`);
}

const p31: Person3 = {
  name: `Kim`,
  age: 10
}

const p32: Person3 = {
  name: 'Lee',
  family: ['Lee1', 'Lee2']
}

const p33: Person3 = {
  name: 'Park',
  friend: p31
}

hello3(p33);
```



### 3. function in interface

```typescript
interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Kim',
  age: 10,
  hello: function(): void {
    console.log(`안녕 ${this.name}`);
  }
};

const p42: Person4 = {
  name: 'Kim',
  age: 10,
  hello(): void {
    console.log(`안녕 ${this.name}`);
  }
};

const p43: Person4 = {
  name: 'Kim',
  age: 10,
  hello: (): void => {
    console.log(`안녕 ${this.name}`);  //자바스크립트와 마찬가지로 사용 불가
  }
};

p41.hello();
p42.hello();
```





### 4. class implements interface

```typescript
interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕 ${this.name}`);
  }
}

const person: IPerson1 = new Person('Kim');
person.hello();
```



### 5. interface extends interface

```typescript
interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: 'Lee',
  city: 'Seoul'
}
```



### 6. function interface

```typescript
interface HelloPerson {
  (name: string, age?: number): void;
}
// age?는 number | undefined 이다.
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
```

타입체크는 helloPerson,1,2dhk HelloPerson사이에서만 발생한다.



### 7.  Readonly interface Properties

수정을 막는 readonly

```typescript
interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Kim',
  gender: 'male'
}

p81.gender = "female"; // gender에러 
//읽기 전용 속성이므로 'gender'에 할당할 수 없습니다.
```



### 8. type alias vs interface

**function**

```typescript
// function
// type alias
type EatType = (food : string) => void;

// interface
interface IEat {
  (fodd: string): void;
}
```

**array**

```typescript
// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index: number]: string;
}
```

**intersection**

```typescript
interface ErrorHandling {
  success: boolean;
  error?: {message: string};
}
interface ArtistsData {
  artists: {name: string}[];
}
// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let Iar: IArtistsResponse;
```

**union types**

```typescript
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

interface IPet extends PetType {} // PetType 에러
// 에러코드: 인터페이스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 확장할 수 있습니다.
// 유니온 타입은 interface에 상속할 수 없다.

class Pet implements PetType {} // PetType 에러
// 에러코드: 클래스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 구현할 수 있습니다.
// 유니온 타입은 class에 implements할수 없다.
```

**declaration- merging**

```typescript
// Declaration Merging - interface
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
mi. //mi. 을 하면 a와 b가 둘다 나온다
// MergingInterface 인터페이스 두개가 Merging 된다.

// ----------------------------------------

// Declaration Merging - alias
type MergingType = {
  a: string;
}
type MergingType = {  //MergingType에러
  // 에러코드: 'MerginType' 식별자가 중복되었습니다.
  b: string;
}
// alias는 merging이 안된다.

```


