// 1. 윤년구하기

const isLeapYear = function(연도) {
  return (연도 % 4 === 0)
  && (연도 % 100 !== 0) 
  || (연도 % 400 === 0)
}

console.log(`2020년은 윤년? ${isLeapYear(2020)}`)
console.log(`2021년은 윤년? ${isLeapYear(2021)}`)
console.log(`2022년은 윤년? ${isLeapYear(2022)}`)
console.log(`2023년은 윤년? ${isLeapYear(2023)}`)

// 2. 합계 구하기

const sumAll = function(a, b) {
  let output = 0
  for (let i=a; i<=b; i++) {
    output += i
  }
  return output
}

console.log(`1부터 100까지의 합은 ${sumAll(1, 100)}`)

// 3. 최소값 구하기

function minNum(array) {
  let output = array[0]
  for (const value of array) {
    if (output > value) {
      output = value
    }
  }
  return output
}

const array = [400, 100, 30, 58, 28, 439, 29]

console.log(minNum(array))



const min = function(배열) {
  let output = 배열[0]
  for (const 값 of 배열) {
    if(output > 값) {
      output = 값
    }
  }
  return output
}

console.log(min([100,200,300,400,500,10]))

console.log(Math.min(100,200,300,40))


// 4. 곱 구하기
const multiply = function(a,b) {
  let output = a * b
  return output
}

console.log(multiplyAll(1,2))


const multiplyAll = function(a,b,c,d) {
  let output = 1
  for (let i=1; i<=multiplyAll.length; i++) {
    output *= i
  }
  return output
}

console.log(multiplyAll(1,2,3,4))


// 5. 짝수만 출력

let 배열 = [1, 2, 3, 4, 5]
배열 = 배열.filter(function (value, index) {
  return value % 2 === 0
})
console.log(배열)

// 화살표함수
let 배열1 = [1, 2, 3, 4, 5]
배열1 = 배열1.filter((value) => value % 2 === 0)
console.log(배열1)


// 6. 콜백함수

const 콜백테스트 = function (콜백함수) {
  for (let i=0; i<5; i++) {
    콜백함수(i)
  }
}

const 함수 = function(콜백함수의_매개변수) {
  console.log(`${콜백함수의_매개변수}번째`)
}
콜백테스트(함수)

// 또는 아래 

콜백테스트(함수 = function(콜백함수의_매개변수) {
  console.log(`${콜백함수의_매개변수}번째`)
})


// 7. setTime 함수
// (1) setTimeOut() 특정한 시간 후에 한번
    // setTimeout(function(Handler){},ms)
// (2) setInterval() 특정한 시간마다
    // setInterval(function(Handler){},ms)

setTimeout(function(){
  console.log('setTimeOut 함수입니다')
}, 1000)

setInterval(function(){
  console.log('setInterval 함수입니다')
}, 1000)

// clearTimeOut()
// clearInterval()
const a = setTimeout(function(){
  console.log('setTimeOut 함수입니다')
})

console.log(a)

clearInterval(a)


// 8. 즉시호출 함수

/* (1) 
(function(){

})() 
*/

/* (2)
(() => {

})()
*/
