class Person1 {
  name: string = 'Kim';
  age: number; 

  constructor(age: number) {
    this.age = age;
  }
}
const p2 = new Person1(10); 
console.log(p2);


