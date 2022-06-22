function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('failed');
}

function infiniteLoop(): never {
  while(true) {
  }
}



let a: string = 'hello';

if (typeof a !== 'string') {
  a; // let a: never
}


declare let b : string | number;

if (typeof b !== 'string') {
  b; // let b: number
}


type Index<T> = T extends string ? T & {[index: string]: any} : never;

const c: Index<{}> = ''; // const c: never
// 'string' 형식은 'never' 형식에 할당할 수 없습니다.