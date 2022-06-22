declare const maybe: unknown;

const aNumber: number = maybe; // aNumber 에러
// 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.

if (maybe === true) {
  const aBoolean: boolean = maybe;

  const aString: string = maybe; // aString 에러
  // 'boolean' 형식은 'string' 형식에 할당할 수 없습니다.
}

if (typeof maybe === 'string') {
  const aString: string = maybe;

  const aBoolean: boolean = maybe; // aBoolean 에러
  //'string' 형식은 'boolean' 형식에 할당할 수 없습니다.
}

