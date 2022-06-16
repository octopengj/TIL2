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
