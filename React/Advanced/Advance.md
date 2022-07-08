## 8. React Advanced

### 8.1. Optimizing Performance

리액트에서 랜더할 때 꼭 필요할때만 랜더링한다.

Reconciliation

- 랜더 전후의 일치 여부를 판단하는 규칙

- 서로 다른 타입의 두 엘리먼트는 서로 다른 트리를 만들어낸다.

- 개발자가 key prop을 통해, 여러 랜더링 사이에서 어떤 자식 엘리먼트가 변경되지 않아야 할지 표시해 줄 수 있다.



예제

App.js

```js
import logo from "./logo.svg";
import "./App.css";
import React from "react";

// (4)그리고 Foo라는 컴포넌트를 만들어준다.
class Foo extends React.Component {
  // (5) 그리고 console이 어떻게 찍히는지 확인
  componentDidMount() {
    console.log("Foo componentDidMount");
  }

  componentWillUnmount() {
    console.log("Foo componentWillUnmount");
  }
  render() {
    return <p>Foo</p>;
  }
}

class App extends React.Component {
  //(2)그렇다면 스테이트가 계속 바뀌어야겠다
  // state가 0인 초기값을 갖고
  state = {
    count: 0,
  };

  // (3) DidMount를 이용해서 Mount가 된 직후 부터 setInterval 돌린다
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    if (this.state.count % 2 === 0) {
      return (
        <div>
          <Foo />
        </div>
      );
    }
    // (1)짝수가 아니라면 엘리먼트의 타입이 다르게 작성
    return (
      <span>
        <Foo />
      </span>
    );
  }
}

export default App;

```



그리고 나서 서버를 돌리면 아래와 같이 계속 찍힌다.

```node.js

App.js:11 Foo componentWillUnmount
App.js:7 Foo componentDidMount
App.js:11 Foo componentWillUnmount
App.js:7 Foo componentDidMount
App.js:11 Foo componentWillUnmount
App.js:7 Foo componentDidMount
App.js:11 Foo componentWillUnmount
App.js:7 Foo componentDidMount
App.js:11 Foo componentWillUnmount
App.js:7 Foo componentDidMount
App.js:11 Foo componentWillUnmount
App.js:7 Foo componentDidMount
```

이렇게 되는 이유는 중간에 있는 Foo 컴포넌트(div, span안에 있는)가 인간의 입장에서는 같은 컴포넌트라고 생각 할 수 있겠지만 상위에 다른 엘리먼트(div, span) 가 있기 때문에

랜더가 됐을 때 이 랜더의 가장 상위 타입이 div와 span인 것은 그냥 다른 것이다라고 결정을 해버리는 것이다.

이게 정말 같은거라면 상위타입을 갖게 만들어서 같은 거라는 것을 리액트에게 표현을 해줘야 한다.

지금은 다르기 때문에 Foo컴포넌트를 mount했다 unmount했다를 반복하는 것이다.

이것이 리액트의 reconciliation의 첫번째 규칙이다.




