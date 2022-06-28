class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age}입니다.`);
  }
}

const p = new Parent('Kim', 10);
p.print(); //이름은 Kim이고, 나이는 10입니다.

class Child extends Parent {
  public gender = 'male'; // 새로 추가 가능

  constructor(age: number) {
    super('Kim Jr.', age);
  } 
}
const c = new Child(1); // 1에 에러
