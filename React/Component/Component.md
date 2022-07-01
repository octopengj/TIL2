## 2. Component

### 2.1 component 작성

- Hooks 이전
  
  - 컴포넌트 내부에 상태가 있다면?
    
    - class
  
  - 컴포넌트 내부에 상태가 없다면?
    
    - 라이프사이클을 사용해야 한다면?
      
      - class
    
    - 라이프사이클에 관계 없다면?
      
      - function

- Hooks 이후
  
  - 상태에 관계 없이
    
    - class
    
    - functionclass component

**class 컴포넌트**

```js
    import React from 'React';

    // 정의
    class ClassComponent extends React.Component {
      render() {
        return (<div>Hello</div>);
      }
    }
    // 사용
    <ClassComponent />
```

*React cdn

https://ko.reactjs.org/docs/cdn-links.html

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    // 정의
    class ClassComponent extends React.Component {
      render() {
        return <div>Hello</div>
      }
    }

    // 사용
    ReactDOM.render(<ClassComponent />, document.querySelector('#root'))

  </script>

</body>
</html>
```

**Function 컴포넌트**

```js
    // 정의 1
    function FunctionComponent() {
      return <div>Hello</div>;
    }

    // 정의 2
    const FunctionComponent = () => <div>Hello</div>;

    // 사용
    <FunctionComponent />
```

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    // // 정의
    // class ClassComponent extends React.Component {
    //   render() {
    //     return <div>Hello</div>
    //   }
    // }

    // // 사용
    // ReactDOM.render(<ClassComponent />, document.querySelector('#root'))


    // import React from 'react';

    // // 정의 1
    // function FunctionComponent() {
    //   return <div>Hello</div>;
    // }

    // // 정의 2
    // const FunctionComponent = () => {
    //   return <div>Hello</div>;
    // }

    // 정의 2-1
    const FunctionComponent = () => <div>Hello</div>;

    // 사용
    ReactDOM.render(<FunctionComponent />, document.querySelector('#root'))
  </script>

</body>
</html>
```

### 2.2. React.createElement 로 컴포넌트 만들기

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/javascript">
    console.log(React);
    console.log(ReactDOM);

    // React.createElement(
    //   type, //  태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
    //   [props], // 리액트 컴포넌트에 넣어주는 데이터 객체
    //   [...children] // 자식으로 넣어주는 요소들
    // );

    // // 1. 태그 이름 문자열 type
    // ReactDOM.render(
    //   React.createElement('h1', null, `type 이 "태그 이름 문자열" 입니다.`),
    //   document.querySelector('#root')
    // );

    // // 2. 리액트 컴포넌트 type
    // const Component = () => {
    //   return React.createElement('p', null, `type 이 "React 컴포넌트" 입니다.`);
    // }

    // // <Component></Component>
    // ReactDOM.render(
    //   React.createElement(Component, null, null),
    //   document.querySelector('#root')
    // )

    // // 3. React.Fragment
    // ReactDOM.render(
    //   React.createElement(
    //     React.Fragment,
    //     null,
    //     `type 이 "React Fragment" 입니다.`
    //   ),
    //   document.querySelector('#root')
    // );
    </script>

</body>
</html>
```

### 2.3. JSX

JSX문법으로 작성된 코드를 bable이 순수한 JavaScript로 컴파일해준다.

https://babeljs.io/

JSX는 React.createElement로 만드는 것보다 가독성이 좋고 문법적인 오류를 인지하기 쉽다.

JSX문법

- 최상위 요소가 하나여야 한다.

- 최상위 요소를 리턴하는 경우, ( )로 감싸야한다.

- 자식들을 바로 랜더링하고 싶으면, <>자식들</>을 사용한다. => Fragment

- 자바스크립트 표형식을 사용하려면 , {표현식}을 사용한다.

- if문은 사용할 수 없다.
  
  - 삼항 연산자 혹은 &&를 사용한다.

- style을 이용해 인라인 스타일링이 가능하다.

- class 대신 className을 사용해 class를 적용할 수 있다.

- 자식요소가 있으면 꼭 닫아야 하고, 자식요소가 없으면 열면서 닫아야 한다.

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root1"></div>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    ReactDOM.render(
      <div>  // 최상위 요소는 하나여야 한다.
        <div>
          <h1>주제</h1>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>,
      document.querySelector('#root1')
    );

    </script>

</body>
</html>
```

### 2.4. Props와 State

Props는 컴포넌트 외부에서 컴포넌트에게 주는 데이터

State는 컴포넌트 내부에서 변경할 수 있는 데이터

둘 다 변경이 발생하면, 랜더가 다시 일어날 수 있다.

- render 함수
  
  Props와 State를 바탕으로 컴포넌트를 그린다.
  
  Props와 State가 변경되면, 컴포넌트를 다시 그린다.
  
  컴포넌트를 그리는 방법을 기술하는 함수가 랜더 함수이다.

#### Props

**function 컴포넌트**

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    function Component(props) {
      return (
        <div>
          <h1>{props.message} 이것은 함수로 만든 컴포넌트 입니다.</h1>
        </div>
      );
    }

    ReactDOM.render(<Component message="안녕하세요!" />, document.querySelector('#root'))
    </script>

</body>
</html>
```

**class 컴포넌트**

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    class Component extends React.Component {
      render() {
        return (
          <div>
            <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
          </div>
        );
      }
    }
    ReactDOM.render(<Component message="안녕하세요!" />, document.querySelector('#root'))

    </script>

</body>
</html>
```

컴포넌트의 기본값을 설정하고 싶으면 Component.defaultProps를 사용한다.

```jsx
Component.defaultProps = {
    message: "기본값"
}
```

클래스와 함수 컴포넌트 둘다 사용이 가능하다

클래스에는 한가지 방법이 더 있다. 클래스 컴포넌트 내부에 삽입해서 사용한다.

```jsx
    class Component extends React.Component {
      render() {
        return (
          <div>
            <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
          </div>
        );
      }
      static defaultProps = {
        message: "기본값"
      }
    }
```

#### State

**class**

- state = {객체} 형태여야한다.

```jsx
    class Component extends React.Component {
          state = {
              count: 0,
          };
      }
```

```jsx
    class Component extends React.Component {
      // state = {
      //   count: 0,
      // };
      constructor(props) {
        super(props);

        // state 초기화
        this.state = {count: 0};
      }
```

리액트에서 state를 변경할 때는 규칙이 있다.

```jsx
    class Component extends React.Component {
      state = {
        count: 0,
      };
      render() {
        return (
          <div>
            <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
            <p>{this.state.count}</p>
          </div>
        );
      }

      componentDidMount() {
        setTimeout(() => {
          this.state.count = this.state.count + 1;
        }, 1000);
      }
```

이런식으로 코드를 작성한다해도 반영이 안된다.

아래처럼 작성을 해야 한다. setState()

- 1 객체를 통체로 새로 만드는 방식

```jsx
      componentDidMount() {
        setTimeout(() => {
          // this.state.count = this.state.count + 1;
          this.setState({   //setState 함수 내부에 객체를 넣어서 사용한다.
            count: this.state.count + 1,
          });
        }, 1000);
      }
```

- 2 이전 값을 이용해서 사용하는 방식

```jsx
      componentDidMount() {
        setTimeout(() => {
          // this.state.count = this.state.count + 1;
          // this.setState({   //setState 함수 내부에 객체를 넣어서 사용한다.
          //   count: this.state.count + 1,
          // });
          this.setState((previousState) => {
            const newState = {count: previousState.count + 1}
            return newState;
          })
        }, 1000);
      }
```

### 2.5. Event Handling

- camelCase로만 사용할 수 있다.

- 이벤트에 연결된 자바스크립트 코드는 함수이다.
  
  - 이벤트={함수}

- 실제 DOM 요소들에만 사용 가능하다.
  
  - 리액트 컴포넌트에 사용하면, props로 전달한다.

**click예문**

function

```jsx
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    //function
    function Component(){
      return (
        <div>
          <button 
            onClick={() => {
              console.log('clicked');
            }}
          >
          클릭
          </button>
        </div>
      );
    }

    ReactDOM.render(<Component />, document.querySelector('#root'));
    </script>

</body>
```

class

```jsx
    // class
    class Component extends React.Component {
      state = {
        count: 0
      };
      render() {
        return (
          <div>
          <p>{this.state.count}</p>
          <button 
            onClick={() => {
              console.log('clicked');
              this.setState((state) => ({
                ...state,
                count: state.count + 1,
              }));
            }}
          >
          클릭
          </button>
        </div>
        );
      }
    }

    ReactDOM.render(<Component />, document.querySelector('#root'));
    </script>
```

click 메서드 분리

```jsx
    class Component extends React.Component {
      state = {
        count: 0
      };
      render() {
        return (
          <div>
          <p>{this.state.count}</p>
          <button onClick={this.click}>클릭</button>
        </div>
        );
      }

      click = () => {
        console.log('clicked');
        this.setState((state) => ({
          ...state,
          count: state.count + 1,
        }));
      };
    }

    ReactDOM.render(<Component />, document.querySelector('#root'));
    </script>
```




