interface Person2 {
  name: string;
  age?: number;  // 있을 수도 없을 수는 없는 ?
}

function hello2(person: Person2): void {
  console.log(`안녕 ${person.name}`);
}

hello2({name: 'Kim', age: 10});
hello2({name: 'Lee'});