## 6. Hooks

### 6.1. Basic Hooks

- useState

- useEffect

- useContext

https://ko.reactjs.org/docs/hooks-intro.html#gatsby-focus-wrapper



**useState**

- useState
  
  - state를 대체 할 수 있다.

- useEffect
  
  - 라이프 사이클 훅을 대체 할 수 있다.
    
    - componentDidMount
    
    - componentDidUpdate
    
    - componentWillUnmount



Example1 (class)

```jsx
import React from "react";

export default class Example1 extends React.Component {
  state = { count: 0 };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

```



Example2(function)

```jsx
import React from "react";

export default function Example2() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}

```



Example3(function)

```jsx
import React from "react";

// useState => { count: 0}
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setState({ count: state.count + 1 });
  }
}

```



Example4(function)

```jsx
import React from "react";

// useState => { count: 0}
export default function Example4() {
  const [state, setState] = React.useState({ count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }
  // function click() {
  //   setState((state) => ({
  //     count: state.count + 1,
  //   }));
  // }
}
```




