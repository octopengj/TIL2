// 서브타입

// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1; // error

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2; // error

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
sub3 = sup3; // error

// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;  // any에서는 문제가 발생하지 않는다.

// sub5 타입은 sup5 타입의 서브 타입이다.
let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5; // error

// sub 6 타입은 sup6 타입의 서브 타입이다.
class Animal {}
class Dog extends Animal {
  eat() {}
}

let sub6: Dog = new Dog();
let sup6: Animal = sub6;
sub6 = sup6; //error


// 1. 같거나 서브 타입인 경우, 할당이 가능하다. => 공변
//primitive type
let sub7: string = '';
let sup7: string | number = sub7;

//object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: {a: string; b: number} = {a: '', b: 1};
let sup8: {a: string | number; b: number} = sub8;

// array - object 와 마찬가지
let sub9: Array<{a: string; b: number}> = [{a: '', b: 1}];
let sup9: Array<{a: string | number; b: number}> = sub9;


// 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다.=>반병
class Person{}
class Developer extends Person{
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

//Developer => Developer 에다가 Developer => Developer를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

//Developer => Developer 에다가 Person => Developer를 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

//Developer => Developer 에다가 StartupDeveloper => Developer를 할당하는 경우
tellme(function sToD(d: StartupDeveloper): Developer{
  return new Developer();
});
//'(d: StartupDeveloper) => Developer' 형식의 인수는 '(d: Developer) => Developer' 형식의 매개 변수에 할당될 수 없습니다.