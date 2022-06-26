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