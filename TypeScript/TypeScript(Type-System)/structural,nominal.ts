// structural type system

interface Iperson {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};

let personInterface: Iperson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;


// nominal type system

type PersonID = string & { readonly brand: unique symbol};

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-aaa'));
getPersonById('id-aaa');  // 'id-aaa'에러
/*
'string' 형식의 인수는 'PersonID' 형식의 매개 변수에 할당될 수 없습니다.
  'string' 형식은 '{ readonly brand: unique symbol; }' 형식에 할당할 수 없습니다.ts(2345)
*/