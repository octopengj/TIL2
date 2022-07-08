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
