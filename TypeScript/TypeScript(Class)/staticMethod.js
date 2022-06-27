"use strict";
class Person6 {
    static hello() {
        console.log('하이');
    }
}
Person6.City = 'seoul';
const p7 = new Person6();
//p7.hello();
Person6.hello();
Person6.City;
// ---------------------------------------------------
class Person7 {
    hello() {
        console.log('하이', Person7.City);
    }
    change() {
        Person7.City = 'USA';
    }
}
Person7.City = 'seoul';
const p8 = new Person7();
p8.hello();
const p9 = new Person7();
p9.hello();
p8.change();
p9.hello();
