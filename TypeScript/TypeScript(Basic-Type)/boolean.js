"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); // boolean
let isOk = true;
// 직접 리터럴 값으로 primitive타입의 값을 사용한다.
let isNotOk = new Boolean(true);
// isNotOk에 오류가 발생한다. 
/*
오류코드
'Boolean' 형식은 'boolean' 형식에 할당할 수 없습니다.
 boolean'은(는) 기본 개체이지만 'Boolean'은(는) 래퍼 개체입니다. 가능한 경우 'boolean'을(를) 사용하세요.
*/ 
