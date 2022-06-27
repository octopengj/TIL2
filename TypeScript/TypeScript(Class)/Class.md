## Class

### 1. Class

- object를 만드는 blueprint

- 클래스 이전에 object를 만드는 기본적인 방법은 function

- OOP를 위한 초석

- TypeScript에서는 클래스도 사용자가 만드는 타입의 하나

- ES6부터 사용 가능



### 2. Quick Start - class



- class 키워들 리용하여 클래스를 만들 수 있다.

- class 이름은 보통 대문자로 시작한다.

- new를 이용하여 class를 통해 object를 만들 수 있다.

- constructor를 이용하여 object를 생성하면서 값을 전달할 수 있다.

- this를 이용해서 만들어진 object를 가리킬 수 있다.

- JS로 컴파일되면 es5의 경우function으로 변경된다.



```typescript
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}
const p1 = new Person('Kim');
console.log(p1);
```

```javascript
"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const p1 = new Person('Kim');
console.log(p1);

```



### 3. constructor & initialize

아래의 코드는 생성자(constructor)가 부여되어 있지 않다. 이럴 때 new Person1( )을 호출할 수 있다. 하지만 안에 인자는 넣을 수 없다. 눈에는 보이지 않지만 class 내부에는 디폴트 생성자가 있는 것으로 판단된다.  디폴트 생성자는 인자가 없이 실행되는 컨스트럭터 함수를 의미한다.

```typescript
class Person1 {
  name: string = 'Kim';
  age: number;
}
const p2 = new Person1(); 
// p2는 Person1으로부터 만들어진 객체이고 Person1타입으로 된다.
console.log(p2);

```



age의 값을 할당하지 않아서 에러가 발생하는데 class 내부가 아닌 어딘가에서 값을 할당을 하려고 의도적으로 작성할 경우 아래처럼 !를 사용한다.

```typescript
class Person1 {
  name: string = 'Kim';
  age!: number; 
}
const p2 = new Person1(); 
console.log(p2);
p2.age = 10;
```

어디에서도 값을 할당하지 않으면 런타임에서 오류가 발생한다.



클래스에 컨스트럭터가 작성이 되면 인자없이 생성하는 기능(디폴트생성자)은 없어진다.

```typescript
class Person1 {
  name: string = 'Kim';
  age!: number; 

  constructor(age: number) {}
}
const p2 = new Person1(10); // 타입에 맞는 값이 들어가게 된다.
```



name을 string이라고 지정하고 class내부에서 초기화 값을 할당하는 행위를  프로퍼티를 선언하면서 할당하는 방법이 있고

컨스트럭터 안에서 this를 사용하는 방법이 있다.

```typescript
class Person1 {
  name: string = 'Kim';
  age: number; 

  constructor(age: number) {
    this.age = age;
  }
}
const p2 = new Person1(10); 
console.log(p2);
```



- 생성자 함수가 없으면, 디폴트 생성자가 불린다.

- 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.

- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.

- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 !를 붙여서 위험을 표현한다.

- 클래스 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined이다.

- 생성자에는 async를 설정할 수 없다.



### 4. 접근 제어자(Access Modifiers)

클래스 내부에는 생성자,  프로퍼티, 메서드에 접근제어가를 붙여서 외부에서 접근할 수 있는지 혹은 상속간에 접근할 수 있는지 내부에서만 접근할 수 있는지를 설정할 수 있다.

타입스크립트는 기본적으로 외부에서 접근할 수 있다.

외부에서 접근할 수 있도록 하는 제어자를 퍼플릭(public)이라고 한다.

```typescript
class Person2 {
  public name: string = 'Kim';
  public age: number; 

  public constructor(age: number) {
    this.age = age;
  }
}
const p3 = new Person2(10); 
console.log(p3);


```



클래스 내부에서만 접근이 가능 하도록 하는 제어자를 프라이빗(private)이라고 한다.

```typescript
class Person2 {
  public name: string = 'Kim';
  public age: number;

  private constructor(age: number) {
    this.age = age;
  }
}
const p3 = new Person2(10); // new Person2()에러 
console.log(p3);

```

private를 붙이면 constuctor는 외부에서 접근을 할 수 없게 된다.

프로퍼티에  private를 붙이면 p3.으로 접근할 수 없다.



### 5. initialization in constructor parameters

생성자의 파라미터를 받아서 바로 그 클래스에 프로퍼티로 초기화 

```typescript
class Person3 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p4 = new Person3('Kim', 10);
console.log(p4);
```

위와 같은 코드가 있다고 할 때 불필요한 코드를 줄일 수 있다.

```typescript
class Person3 {
  constructor(public name: string, public age: number) {}
}

const p4 = new Person3('Kim', 10);
console.log(p4);
```

접근제어자를 붙여서 사용하면 인자를 받아서 Person3의 this.name, this.age로 할당이 된다.



### 6. Getter & Setter

get을 하는 함수 getter, set을 하는 함수 setter

```typescript
class Person4 {
  constructor(public _name: string, public age: number) {}

  get name() {

    console.log('get');
    return this._name;
  }
}

const p5 = new Person4('Kim', 10);
console.log(p5.name); //get을 하는 함수 getter   

// get // return 이 되기 전에 무언가를 할 수 있다는 것을 알 수 있다.
// Kim
```

get은 return이 있어야 하고 get은 return을 할 필요는 없고 인자를 받아와야 한다.

```typescript
class Person4 {
  constructor(public _name: string, public age: number) {}

  get name() {

    console.log('get');
    return this._name;
  }
  
  set name(n: string) {
    console.log('set');
    this._name = n;
  }
}

const p5 = new Person4('Kim', 10);
console.log(p5.name); //get을 하는 함수 getter
p5.name = "Lee"; //set을 하는 함수 setter
console.log(p5.name);

/*
get
Kim
set
get
Lee
*/
```



 getter만 이용하면 읽기전용처럼 작동 시킬 수 있다.

```typescript
class Person4 {
  constructor(public _name: string, public age: number) {}

  get name() {

    console.log('get');
    return this._name;
  }
  
  // set name(n: string) {
  //   console.log('set');
  //   this._name = n;
  // }
}

const p5 = new Person4('Kim', 10);
console.log(p5.name);
p5.name = "Lee"; // name 에러 //읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
console.log(p5.name);
```



### 7. readonly properties

readonly가 붙으면 외부에서 접근을 할 수가 없다.

```typescript
class Person5 {
  public readonly name: string = 'Lee';

  constructor(private _name: string, private age: number) {}
}

const p6 = new Person5('Kim', 10);
console.log(p6.name);
p6.name = "Lee"; // name 에러 //읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
console.log(p6.name);
```



```typescript
class Person5 {
  public readonly name: string = 'Lee';
  private readonly country: string = 'Korea';

  constructor(private _name: string, private age: number) {}

  hello() {
    this.country = 'USA'; // country에러
  }
}
```

readonly을 값을 초기화하는 방법은 선언하는 코드에 직접 변경을 하거나

constructor 내부에서만 가능하다.



### 8. Index Signatures in class

클래스는 객체를 만들어내는 블루프린트같은 역할을 한다.

```typescript
/*
a반 b반 그룹을 만들고 성별을 작성할 때
a반에는 kim lee
b반에는 park choi
*/

class Student {
  [index: string]: 'male' | 'female';
}

const a = new Student();
a.kim = 'male';
a.lee = 'male';

const b= new Student();
b.park = "female";
b.choi = "female";

console.log(a);
console.log(b);

// Student { kim: 'male', lee: 'male' }
// Student { park: 'female', choi: 'female' }
```



### 9. Static Properties & Methods

```typescript
class Person6 {}

const p7 = new Person6(); class Person6 {
  public hello() {
    console.log('하이');
  }
}

const p7 = new Person6(); 
p7.hello(); // 생성자함수를 통해서 만들어진 객체에 접근하여 사용했다면


```

static

```typescript
Person6.hello();// static이 붙으면 이런식으로 class에 바로 접근이 가능하다.
```

```typescript
class Person6 {
  public static hello() {
    console.log('하이');
  }
}

const p7 = new Person6(); 
p7.hello(); // hello()에러 static이 붙으면 이런식으로 접근이 불가능하다.

Person6.hello();


```


