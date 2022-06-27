class Person5 {
  public readonly name: string = 'Lee';
  private readonly country: string = 'Korea';

  constructor(private _name: string, private age: number) {}

  hello() {
    this.country = 'USA'; // country에러
  }
}

const p6 = new Person5('Kim', 10);
console.log(p6.name);
p6.name = "Lee"; // name 에러 //읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
console.log(p6.name);