# scss

sassmeister.com 에서 scss의 컴파일 전후 모습을 쉽게 확인 할 수 있다.



### 1. 프로젝트 생성

npm 환경 

```bash
npm init -y
```

parcel-bundler설치

```bash
npm i -D parcel-bundler
```

package.json -> scripts 수정

```json
"scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
```

index.html파일 생성 / main.scss파일 생성 후 link



### 2. 주석

SCSS에서는 두가지의 주석처리 방식을 제공한다.

**scss**

```scss
.container{
    h1 {
        color: red;
        //background-color: blue;
        /* font-size: 10px; */
    }
}
```

`//`을 사용하면 css컴파일 이후에 보이지 않는다.

`/**/` 을 사용하면 css컴파일 이후에도 주석이 보인다.

**css**

```css
.container h1 {
  color: red;
  /* font-size: 10px; */
}
```



### 3. 중첩

**scss**

```scss
.container {
    ul {
        li {
            font-size: 10px;
            .one {
                color: blue;
            }
            .two {
                color: red;
            }
        }
    }
}
```

**css**

```css
.container ul li {
  font-size: 10px;
}
.container ul li .one {
  color: blue;
}
.container ul li .two {
  color: red;
}
```



**<u>자식선택자</u>**

`>`를 붙이면 된다

**scss**

```scss
.container {
    > ul {
        li {
            font-size: 10px;
            .one {
                color: blue;
            }
            .two {
                color: red;
            }
        }
    }
}
```

**css**

```css
.container > ul li {
  font-size: 10px;
}
.container > ul li .one {
  color: blue;
}
.container > ul li .two {
  color: red;
}
```





### 4. 부모(상위) 선택자 참조

`&`를 사용한다.

**scss**

```scss
.btn {
    position: absolute;
    &.active {
        color: red;
    }
}

.list {
    li {
        &:last-child {
            margin-right: 0;
        }
    }
}
```

**css**

```css
.btn {
  position: absolute;
}
.btn.active {
  color: red;
}

.list li:last-child {
  margin-right: 0;
}
```



### 5. 중첩된 속성

**scss**

```scss
.box {
    font: {
        weight: bold;
        size: 10px;
        family: sans-serif;
    };
    margin: {
        top: 10px;
        left: 20px;
    };
    padding: {
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 30px;
    };
}
```

**css**

```css
.box {
  font-weight: bold;
  font-size: 10px;
  font-family: sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 30px;
}
```



### 6. 변수

**scss**

```scss
$size: 100px; // 전역변수

.container {
    bottom: $size;
    $size: 200px;
    $color: red; // 유효범위는 .container
    top: $size;
    .item {
        $size: 300px; // 재할당 가능
        width: 100px;
        height: $size;
        transform: translateX($size);
        color: $color;
    }
    left: $size;
}
```

**css**

```css
.container {
  bottom: 100px;
  top: 200px;
  left: 300px;
}
.container .item {
  width: 100px;
  height: 300px;
  transform: translateX(300px);
  color: red;
}
```

처음 size는 전역변수로 작성이 되어 있고 전역 변수의 값으로 bottom 100px;

.container 내부에서 작성된 변수의 유효범위는 .container내부이다.

scss에서의 변수는 자바스크립트의 let처럼 재할당이 가능하다.

.container 내부에서 재할당된 size는 200px; 이므로 .container 내부의 top값은 200px;

.item 내부에서 재할당된 size는 300px;로 .item내부의 height는 300px;

.item 외부의 left값도 재할당된 size값인 300px;을 갖게 된다.



### 7. 산술 연산

**scss**

```scss
div {
    width: 20px + 20px;
    height: 40px - 10px;
    font-size: 10px *2;
    padding: 20px % 7;
    margin: 30px / 2; // 단축속성을 사용한것처럼 작동
    margin: (30px / 2); // 첫번째 방법
    $size: 30px;        // 두번째 방법 변수이용
    margin: $size / 2;
    margin: 10px + 4px / 2;  // 세번째 방법 
    // 다른 연산자 기호를 사용하여 단축속성이 아니라는 것을 명시
    // 우선순위 때문에 정확한 계산이 안된다 => 괄호 사용할 것
    margin: (10px + 4px) / 2;
}

// 나누기는 아래처럼 단축속성의 개념처럼 인식이 된다.
span {
    font-size: 10px;
    line-height: 10px;
    font-family: serif;
    font: 10px / 10px serif; // font-size / line-height / serif
}
```

**css**

```css
div {
  width: 40px;
  height: 30px;
  font-size: 20px;
  padding: 6px;
  margin: 30px/2;
  margin: 15px;
  margin: 15px;
  margin: 12px;
  margin: 7px;
}

span {
  font-size: 10px;
  line-height: 10px;
  font-family: serif;
  font: 10px/10px serif;
}
```



### 8. 재활용(Mixins)

@mixin @include 키워드로 사용

**scss**

```scss
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    @include center;
    .item {
        @include center;
    }
}
.box{
    @include center;
}
```

**css**

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

자바스크립트의 매개변수에 인수를 받아쓰는 것처럼 사용할 수 있다.

**scss**

```scss
@mixin box($size) {
    width: $size;
    height: $size;
    background-color: red;
}
.container {
    @include box(200px);
    .item {
        @include box(100px);
    }
}
.box {
    @include box(100px);
}
```

**css**

```css
.container {
  width: 200px;
  height: 200px;
  background-color: red;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: red;
}

.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

기본값을 지정해서 사용할 수도 있다.

**scss**

```scss
@mixin box($size: 100px) {
    width: $size;
    height: $size;
    background-color: red;
}
.container {
    @include box(200px);
    .item {
        @include box;
    }
}
.box {
    @include box;
}
```

**css**

```css
.container {
  width: 200px;
  height: 200px;
  background-color: red;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: red;
}

.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

여러개의 매개변수를 지정할 수도 있다.

**scss**

```scss
@mixin box($size: 100px, $color: blue) {
    width: $size;
    height: $size;
    background-color: $color;
}
.container {
    @include box(200px, red);
    .item {
        @include box;
    }
}
.box {
    @include box;
```

**css**

```css
.container {
  width: 200px;
  height: 200px;
  background-color: red;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: blue;
}

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

인수의 순서가 매개변수와 일치해야 한다.

.item 의 @include box에 green만 넣어보면

scss

```scss
@mixin box($size: 100px, $color: blue) {
    width: $size;
    height: $size;
    background-color: $color;
}
.container {
    @include box(200px, red);
    .item {
        @include box(green);
    }
}
.box {
    @include box;
}
```

css

```css
.container {
  width: 200px;
  height: 200px;
  background-color: red;
}
.container .item {
  width: green;
  height: green;
  background-color: blue;
}

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

width와 height가 green으로 바뀌었다.

인수를 매개변수와 맞춰서 작성을 하거나 

```scss
backgroud-color: (100px,  green);
```

키워드 인수를 사용해야 한다. 

**scss**

```scss
@mixin box($size: 100px, $color: blue) {
    width: $size;
    height: $size;
    background-color: $color;
}
.container {
    @include box(200px, red);
    .item {
        @include box($color: green);
    }
}
.box {
    @include box;
}
```

**css**

```css
.container {
  width: 200px;
  height: 200px;
  background-color: red;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: green;
}

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```



### 9. 반복문

자바스크립트의 반복문 처럼 사용된다.

```javascript
 for (let i = 0; i < 5; i++) {
     console.log(`loop-${i}`)
 }
```



**scss**

```scss
@for $i from 1 through 5 {
    .box {
        width: 100px;
    }
}
```

**css**

```css-extras
.box {
  width: 100px;
}

.box {
  width: 100px;
}

.box {
  width: 100px;
}

.box {
  width: 100px;
}

.box {
  width: 100px;
}
```

 `#{ }` 사용

**scss**

```scss
@for $i from 1 through 5 {
    .box:nth-child(#{$i}) {
        width: 100px;
    }
}
```

**css**

```css
.box:nth-child(1) {
  width: 100px;
}

.box:nth-child(2) {
  width: 100px;
}

.box:nth-child(3) {
  width: 100px;
}

.box:nth-child(4) {
  width: 100px;
}

.box:nth-child(5) {
  width: 100px;
}
```

i변수의 활용

**scss**

```scss
@for $i from 1 through 5 {
    .box:nth-child(#{$i}) {
        width: 100px * $i;
    }
}
```

**css**

```css
.box:nth-child(1) {
  width: 100px;
}

.box:nth-child(2) {
  width: 200px;
}

.box:nth-child(3) {
  width: 300px;
}

.box:nth-child(4) {
  width: 400px;
}

.box:nth-child(5) {
  width: 500px;
}
```



### 10. 함수

**scss**

```scss
@mixin center {
    display: center;
    justify-content: center;
    align-items: center;
}

@function ratio($size, $ratio) {
    @return $size * $ratio
}

.box {
    $width: 100px;
    width: $width;
    height: ratio($width, 9/16);
    @include center;
}
```

**css**

```css
.box {
  width: 100px;
  height: 56.25px;
  display: center;
  justify-content: center;
  align-items: center;
}
```



### 11. 색상 내장 함수

- mix를 이용하면 색을 mix할 수 있다.

**scss**

```scss
.box {
    $color: blue;
    width: 100px;
    height: 100px;
    background-color: $color;
    &.built-in {
        background-color: mix($color, red);
    }
}
```

**css**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.box.built-in {
  background-color: purple;
}
```

- lighten을 사용하면 색이 더 밝아진다.

**scss**

```scss
.box {
    $color: blue;
    width: 100px;
    height: 100px;
    background-color: $color;
    &.built-in {
        background-color: lighten($color, 10%);
    }
}
```

**css**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.box.built-in {
  background-color: #3333ff;
}
```

- darken을 사용하면 색이 더 어두워진다.

**scss**

```scss
.box {
    $color: blue;
    width: 100px;
    height: 100px;
    background-color: $color;
    &.built-in {
        background-color: darken($color, 10%);
    }
}
```

**css**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.box.built-in {
  background-color: #0000cc;
}
```

이런 기능은 hover를 했을 때 색 변환을 줄때 사용하기 좋다.

**scss**

```scss
.box {
    $color: blue;
    width: 100px;
    height: 100px;
    background-color: $color;
    &:hover {
        background-color: darken($color, 10%);
    }
}
```

**css**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.box:hover {
  background-color: #0000cc;
}
```

- saturate 채도를 높여 줄때 사용한다.

**scss**

```scss
.box {
    $color: blue;
    width: 100px;
    height: 100px;
    background-color: $color;
    &:hover {
        background-color: saturate($color, 50%);
    }
}
```

- desaturate 채도를 낮춰 줄때 사용한다.

**scss**

```scss
.box {
    $color: blue;
    width: 100px;
    height: 100px;
    background-color: $color;
    &:hover {
        background-color: desaturate($color, 50%);
    }
}
```

- grayscale 회색을 만들어 준다.

**scss**

```scss
.box {
    $color: blue;
    width: 100px;
    height: 100px;
    background-color: $color;
    &:hover {
        background-color: grayscale($color);
    }
}
```

**css**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.box:hover {
  background-color: gray;
}
```

- invert 색을 반전시켜준다.

**scss**

```scss
.box {
    $color: blue;
    width: 100px;
    height: 100px;
    background-color: $color;
    &:hover {
        background-color: invert($color);
    }
}
```

**css**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.box:hover {
  background-color: yellow;
}
```

- rgba

**scss**

```scss
.box {
    $color: blue;
    width: 100px;
    height: 100px;
    background-color: $color;
    &:hover {
        background-color: rgba($color, .5);
    }
}
```

**css**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.box:hover {
  background-color: rgba(0, 0, 255, 0.5);
}
```

css에서는 4개의 값 scss에서는 2개의 값만 있으면 된다.



### 12. 가져오기

scss파일에서 다른 scss파일을 불러올 때 @import url(" "); 로 가져올 수 있다.

scss에서는 url( );를 붙이지 않고 "경로/파일명.scss"로 불러올 수 도 있다.

확장자를 명시적으로 입력하지 않아도 정상적으로 작동한다.

`,`를 이용해서 두개의 파일을 불러올 수도 있다.

**main.scss**

```scss
@import url("./sub.scss");

$color: blue;

.container {
  h1 {
    color: $color;
  }
}
```

**sub.scss**

```scss
body {
  .container {
    background-color: orange;
  }
}
```

**sub2.scss**

```scss
body {
  background-color: blue;
}
  }
}
```

**main.scss**

```scss
@import "./sub", "./sub2";

$color: blue;

.container {
  h1 {
    color: $color;
  }
}
```

두개의 파일을 불러올 때 url( )로 묶어주면 에러가 발생할 수 있다.



### 13. 데이터 종류

number => 숫자

string => 문자 

color => color 색은 string데이터로 인식되지 않는다.

boolean => boolean

null => null

list => 배열과 유사

map => 키와 밸류형태

**scss**

```scss
$number: 1;             // .5, 100px, 1em
$string: bold;          // relative, "../images/a.png"
$color: white;          // blue, #fff000, rgba(0,0,0,.1)
$boolean: ture;         // false
$null: null;
$list: red, blue, yellow;
$map: (
    r: red,
    b: blue,
    y: yellow
);

.box {
    width: 100px;
    color: black;
    position: relative;
}
```



### 14. 반복문 @each

each 키워드 뒤에 변수를 만들어서 사용한다.



- list 사용방법

**scss**

```scss
$list: red, blue, yellow;
$map: (
    r: red,
    b: blue,
    y: yellow
);

@each $c in $list {
    .box {
        color: $c;
    }
}
```

**css**

```css
.box {
  color: red;
}

.box {
  color: blue;
}

.box {
  color: yellow;
}
```



- map 사용방법

each 키워드 뒤에 쉼표로 구분을 해서 key와 value 형태로 들어가게 된다.

key와 value 는 임의대로 설정 가능 

**scss**

```scss
$list: red, blue, yellow;
$map: (
    r: red,
    b: blue,
    y: yellow
);

@each $key, $value in $map {
    .box-#{$key} {
        color: $value;
    }
}

```

**css**

```css
.box-r {
  color: red;
}

.box-b {
  color: blue;
}

.box-y {
  color: yellow;
}
```



### 15. 재활용 @content

**scss**

```scss
@mixin left-top {
    position: absolute;
    top: 0;
    left: 0;
    @content;
}
.container {
    width: 100px;
    height: 100px;
    @include left-top;
}
.box {
    width: 200px;
    height: 300px;
    @include left-top {    
        // 중괄호 사이에 있는 값이 @content에 삽입이 된다.
        bottom: 0;
        right: 0;
        margin: auto;
    }
}
```

**css**

```css
.container {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
}

.box {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```


