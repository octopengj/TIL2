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
