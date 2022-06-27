class Person2 {
  public name: string = 'Kim';
  public age: number; 

  private constructor(age: number) {
    this.age = age;
  }
}
const p3 = new Person2(10); 
console.log(p3);
