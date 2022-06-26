function hello(person: {name: string; age: number}): void {
  console.log(`안녕 ${person.name}`);
}

const p: {name: string; age: number} = {
  name: 'Kim',
  age: 10
};

hello1(p);


//--------------------------------------------------

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