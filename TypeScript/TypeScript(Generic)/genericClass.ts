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


// ------------------------------------------------------
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