interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'Kim',
  age: 10
}

// function getProp(obj: IPerson, key: 'name' | 'age'): string | number {
//   return obj[key];
// }

// function setProp(obj: IPerson, key: 'name' | 'age', value: string | number) {
//   obj[key] = value;
  /*
  (parameter) key: "name" | "age"
  'string | number' 형식은 'never' 형식에 할당할 수 없습니다.
  'string' 형식은 'never' 형식에 할당할 수 없습니다.
  */
//}


// type Keys = keyof IPerson;

// const keys: Keys = ''; //''이 자리에 'name' 혹은 'age'가 올 수 있다.
// 어떤 개체에 keyof를 붙이면 그 결과물이 타입으로 나오는데 
// 그 타입은 key의 이름으로 된 문자열의 유니온 타입으로 만들어진다.

// keyof를 적용하면 
// function getProp(obj: IPerson, key: 'name' | 'age'): string | number {
//    return obj[key];
// }
// 아래와 같이 바꿀 수 있다.

// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
//    return obj[key];
// }
// 하지만 getProp의 결과물은 다음과 같이 해석이 된다.
// IPerson[keyof IPerson]
// -> IPerson['name' | 'age']
// -> IPerson['name'] | IPerson['age']
// -> string | number
// 그래서 'name'이 들어가면 string, 'age'가 들어가면 number로 나오는 결과물이 아니다.
// 그 결과를 얻기 위해서는 generic을 사용해야 한다.

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
// 여기서 K는 name 혹은 age가 된다.

// getProp(person, '');
// function getProp(obj: IPerson, key: 'name' | 'age'): string | number

getProp(person, 'name');
// function getProp<IPerson, "name">(obj: IPerson, key: "name"): string


// function setProp(obj: IPerson, key: keyof IPerson, value: string | number) {
//   obj[key] = value;
// }


function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

setProp(person, 'name', 'Lee');
// 'name'을 바꾸고 싶다면 
// setProp(obj: IPerson, key: "name", value: string): void
// 'age'를 바꾸고 싶다면
// setProp(obj: IPerson, key: "age", value: number): void