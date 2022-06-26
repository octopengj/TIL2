interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Kim',
  age: 10,
  hello: function(): void {
    console.log(`안녕 ${this.name}`);
  }
};

const p42: Person4 = {
  name: 'Kim',
  age: 10,
  hello(): void {
    console.log(`안녕 ${this.name}`);
  }
};

// const p43: Person4 = {
//   name: 'Kim',
//   age: 10,
//   hello: (): void => {
//     console.log(`안녕 ${this.name}`);  //자바스크립트와 마찬가지로 사용 불가
//   }
// };

p41.hello();
p42.hello();