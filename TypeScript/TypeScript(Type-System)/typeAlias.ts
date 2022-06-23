//Aliasing Primitive
type MyStringType = string;

const str = 'world';

let mystr: MyStringType = 'hello';
mystr = str;


//Aliasing Union Type
let person: string | number = 0;
person = 'Kim';

type StringNumber = string | number;

let another: StringNumber = 0;
another = 'Lee';


//Aliasing Tuple
let person1: [string, number] = ['Kim', 10];

type PersonTuple = [string, number];

let another1: PersonTuple = ['Lee', 10];


//Aliasing Function
type EatType = (food: string) => void;