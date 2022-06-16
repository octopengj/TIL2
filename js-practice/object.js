// 1. 객체
const array = [20, '문자열', true, function(){}, ()=>{}]
const object = {
  key: 'value',
  abc: '영어',
  //값으로 함수가 올 수 있다 -> 이 함수를 매서드라 부른다.
  name: function() {
    console.log(object.abc)
  }
}
object.name() // 호출 -> 영어

// 접근
object.속성
object['속성']

// 변경
object.속성 = 값1
object['속성'] = 값1

object.abc = '수학' // '영어' -> '수학'

/* 
매서드를 작성할 때 익명 함수로 작성하는 것이 우선시 된다.
화살표 함수도 작성이 가능하나 this.키를 사용하게 될경우 
this가 바인딩하는 대상이 엉뚱한 window를 가리킨다.
*/


// 2. 객체 동적으로 속성 추가

// - 정적으로 생성 => 처음 만들때 생성
const human = {
  name: '이름',
  age: 100
}

// - 동적으로 생성 => 나중에 생성
human.height = 200

// - 동적으로 제거
delete human.height
delete human[height]

/* 
- 상수로 선언해도 변경이 가능한 이유
배열과 같이 stack이 아닌 heap에 올라가기 때문에 변경이 가능하다.
const human = {}  --안됨
const human = ''  --안됨

*/

/* - 기본 자료형 => 스택에 값을 저장
                => 속성과 매서드를 가질 수 없다.
    - 숫자
    - 문자열
    - 불리언
   - 객체 자료형 => 스택과 힙을 연결해서 값을 저장
                => 속성과 매서드를 가질 수 있다.
    - 함수
    - 배열
    - 객체
    - 등
*/


// 3. 객체 기본속성 지정

const test1 = function(name, age, height) {
  return `${name} : ${age} : ${height}`
}
console.log(test1('kim', 100, 200))


const test2 = function(object) {
  return `${object.name} : ${object.age} : ${object.height}`
}
console.log(test2({
  name: 'kim', 
  age: 100, 
  height: 200
}))


// test1보다 test2처럼 작성하는 것이 읽기 편하다.

// 매개변수를 추가한다면

const test1 = function(name, age, height, status) {
  return `${name} : ${age} : ${height}: ${status}`
}
console.log(test1('kim', 100, 200, 'good'))


const test2 = function(object) {
  return `${object.name} : ${object.age} : ${object.height} : ${object.status}`
}
console.log(test2({
  name: 'kim', 
  age: 100, 
  height: 200,
  status: 'good'
}))


// 매개변수가 없을 경우에 기본 값으로 지정을 해야하는 경우 아래처럼 지정할 수 있다.
const test1 = function(name, age, height, status='good') {
  return `${name} : ${age} : ${height}: ${status}`
}
console.log(test1('kim', 100, 200,))


// 객체 기본 매개변수 지정하는 방법
 
// 구(1)
object.status = object.status !== undefined ? object.status : 'good'
// 구(2) object.status 빈문자열이나 0과 같이 false로 변환되는 값이 오지 않는다는 조건
object.status = object.status ? object.status : 'good'
// 구(3)
object.status = object.status || 'good'

// 신(1)
object = {status: 'good', ...object}
// 신(2) 함수 정의를 바꿈
statusAdd = function ({name, age, height, status = 'good'}) {
  return `${name} : ${age} : ${height} : ${status}`
}

console.log(test2({
  name: 'kim', 
  age: 100, 
  height: 200,
  status: 'good'
}))


// 전개연산자로 객체 기본 매개변수 지정 => 신(1)

const human = {
  name: 'kim',
  age: 100,
  height: 200
}

const newMan = {
  status: 'good',
  
  ...human
}
console.log(newMan)   
// {status: 'good', name: 'kim', age: 100, height: 200}

// 기존 human에 status값이 있다면
const human = {
  name: 'kim',
  age: 100,
  height: 200,
  status: 'bad'
}
const newMan = {
  status: 'good',
  
  ...human
}
console.log(newMan) 
// {status: 'bad', name: 'kim', age: 100, height: 200}

// newMan의 전개연산자 위치가 바뀐다면
const human = {
  name: 'kim',
  age: 100,
  height: 200,
  status: 'bad'
}
const newMan = {
  ...human,

  status: 'good'
 
}
console.log(newMan) 
// {name: 'kim', age: 100, height: 200, status: 'good'}
// 그래서 전개연산자 위치가 중요하다.


// 신(2)

const human = function ({name, age, height, status = 'good'}) {
  return `${name} : ${age} : ${height} : ${status}`
}

console.log(human({
  name: 'kim',
  age: 100,
  height: 200,
}))
// kim : 100 : 200 : good



// 객체 속성 일괄 추출

const test3 = function(object) {
  object = {status: 'good', ...object}
  return `${object.name} : ${object.age} : ${object.height} : ${object.status}`
}
console.log(test3({
  name: 'kim', 
  age: 100, 
  height: 200
}))

// 위의 코드의 중복을 줄이고 간결하게

const test3 = function(object) {
  const {name, age, height, status} = {status: 'good', ...object}
  return `${name} : ${age} : ${height} : ${status}`
}
console.log(test3({
  name: 'kim', 
  age: 100, 
  height: 200
}))