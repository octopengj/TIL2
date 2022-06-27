"use strict";
class Person4 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log('get');
        return this._name;
    }
}
const p5 = new Person4('Kim', 10);
console.log(p5.name);
p5.name = "Lee"; // name 에러 //읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
console.log(p5.name);
/*
get
Kim
set
get
Lee
*/ 
