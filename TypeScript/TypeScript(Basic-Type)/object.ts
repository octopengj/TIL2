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