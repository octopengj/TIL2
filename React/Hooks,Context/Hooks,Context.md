## 6. Hooks

### 6.1. Basic Hooks

- useState

- useEffect

- useContext

https://ko.reactjs.org/docs/hooks-intro.html#gatsby-focus-wrapper





- useState
  
  - state를 대체 할 수 있다.

- useEffect
  
  - 라이프 사이클 훅을 대체 할 수 있다.
    
    - componentDidMount
    
    - componentDidUpdate
    
    - componentWillUnmount



**useState**

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



**useEffect**

Example5(calss)

```jsx
import React from "react";

export default class Example5 extends React.Component {
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

  componentDidMount() {
    console.log("componentDidMount", this.state.count);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

```



Example6(function)

```jsx
import React from "react";

export default function Example6() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate", count);
  });

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

 useEffect에 빈 배열이 있으면 최초에만 실행

엄밀히 따지면 componentDidUpdate는 이루어 지지 않는다. 최초에만 실행되기 때문

```jsx
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate", count);
  }, []);
```



useEffect에 빈 배열이 없으면 항상랜더가 된 직후에 함수를 실행

```jsx
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate", count);
  });
```



배열 안에 dependency가 있으면 count에 변화가 있으면 update가 실행된다는 것을 의미

```jsx
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);
  }, [count]);
```



useEffect가 여러개 있으면 순서대로 실행이 된다.



useEffect에서 componentWillUnmout와 비슷한 기능을 사용 할 수 있다.

```jsx
import React from "react";

export default function Example7() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate", count);

    return () => {
      // cleanup
      // componentWillUnmount
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      //cleanup
      console.log("cleanup by count", count);
    };
  }, [count]);

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



```jsx

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count); // 실행 2

    return () => {
      //cleanup
      console.log("cleanup by count", count); // 실행1
    };
  }, [count]);   // 이전 디팬던시 값

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click m
```

useEffect 함수가 다시 실행 될 때 미리 이전 디팬던시 값으로 return 함수를 실행 해주고

다음으로 넘어간다. 





useEffect 관련 개인블로그 

https://www.rinae.dev/posts/a-complete-guide-to-useeffect-ko





### 6.2. Custom Hooks

훅을 따로 만들어서 사용



useWindowWidth.js

```js
import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}

```



App.js

```js
import logo from "./logo.svg";
import "./App.css";
import Example7 from "./components/Example7";
import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const width = useWindowWidth();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example7 />
        {width}
      </header>
    </div>
  );
}

export default App;


```





### 6.3. Additional Hooks

**useReducer**

- 다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우

- 다음 state가 이전 state에 의존적인 경우



Example8

```jsx
import { useReducer } from "react";

// reducer => state를 변경하는 로직이 담겨있는 함수
// action = 객체
const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      count: state.count + 1,
    };
  }

  return state;
};

// dispatch => action 객체를 넣어서 실행

// action은 객체이고 필수 프로퍼티로 type을 가진다.

export default function Example8() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    dispatch({ type: "PLUS" });
  }
}

```

App.js

```js
import logo from "./logo.svg";
import "./App.css";
import Example8 from "./components/Example8";
import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const width = useWindowWidth();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example8 />
        {width}
      </header>
    </div>
  );
}

export default App;


```



**useMemo**



Example9

```jsx
import { useState } from "react";

export default function Example9() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{}</p>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
```

타이핑을 할 때 마다 랜더가 다시된다.

```js
import logo from "./logo.svg";
import "./App.css";
import Example9 from "./components/Example9";
import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const width = useWindowWidth();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example9 />
        {width}
      </header>
    </div>
  );
}

export default App;


```



person이라는 것을 만들어서 나이를 계산하는 코드

```jsx
import { useState } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Example9() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "Kim", age: 10 },
    { name: "Lee", age: 20 },
  ]);

  const count = sum(persons);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
```

타이핑을 할 때 마다 sum...이 올라간다.

랜더가 다시되면서 함수가 다시 실행된다.

이런 경우에 count같은 경우는 persons에 의존적으로 실행이 된다.

persons가 변하지 않으면 다시 실행할 필요가 없는데 계속 sum을 계산한다

```jsx
  const count = sum(persons);
```



이런 경우에 낭비되지 않게 하기 위해서 sum을 persons에 의존적으로 구해서 사용하겠다는 의미로 useMemo를 사용한다.

```jsx
  // useMemo의 첫번째 인자로 함수를 받는다.
  // 디팬더시 리스트를 두번째 인자로 받는다.
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);
```

타이핑을 해도 sum이 올라가지 않는다.

타이핑을 하더라도 value만 바뀌기 때문에 persons에 의존적인 경우의 count는 다시 계산이 되지 않는다.

```jsx
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
    </div>
  );
```



**useRef**



Example10

```jsx
import { useState, useRef, createRef } from "react";

export default function Example10() {
  const [value, setValue] = useState("");
  const input1Ref = createRef();
  const input2Ref = useRef();

  console.log(input1Ref.current, input2Ref.current);

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}

```

 타이핑을 하고 console을 보면 타이핑을 할 때마다 null <input>이 나온다

createRef로 만들어진 input1Ref는 

```jsx
const input1Ref = createRef();
```

이 input1Ref를 항상 유지하는 것이 아니라 랜더링 될 때마다 새로 래퍼런스를 만들어서 그 래퍼런스에 랜더가 될 때 

```jsx
      <input ref={input1Ref} />
```

이곳에 input을 넣어주는 것이다.



uesRef로 만들어진 input2Ref는 랜더를 돌아도 계속 유지하는 것이다.

다만 최초로 진행 될 때는 

```jsx
  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
```

여기가 랜더 된적이 없기 때문에 최초에만 undefined가 나온다.

그 이후에는 계속 같은 래퍼런스를 새로 만들어서 넣는게 아니라 같은 래퍼런스를 가리킨다.





특징은 랜더사이에 어떤 상태를 유지하는 기능이라는 점

class 컴포넌트에서는 랜더 매서드만 계속 돌기 때문에 class안에 있는 것들이 유지되지만

function 컴포넌트는 계속 function이 생성이 되면서 그 안에 있는 것들이 새로 생성되는 경향이 있기 때문에 새로 생성되는 것들을 랜더 사이에 생성될 필요가 없음을 도와주는 것이 

useRef, useMemo, useCallback 같은 것이다.





### 6.4. Router Hooks

[React Router: Declarative Routing for React.js](https://v5.reactrouter.com/web/api/Hooks)



- useHistory

- useLocation

- useParams

- useRouteMatch



**useHistory**



App.js(라우터에서 사용했던 코드)

```js
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Links />
    <NavLinks />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound}/>
    </Switch>

    </BrowserRouter>
  );
}

export default App;

```

Login.jsx(라우터에서 사용했던 코드)

```jsx
import LoginButton from "../components/LoginButton";

export default function Login() {

  return (
  <div>
    <h2>Login 페이지 입니다.</h2>
    <LoginButton />
  </div>
  );
}
```

LoginButton.jsx(라우터에서 사용했던 코드)

```jsx
import {withRouter} from 'react-router-dom';

export default withRouter(function LoginButton(props) {
  console.log(props);
  function login() {
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  }
  return <button onClick={login}>로그인하기</button>
})
```



function를 빼서 export를 해주면

```jsx
export default function LoginButton(props) {
  console.log(props);
  function login() {
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  }
  return <button onClick={login}>로그인하기</button>
}
```

버튼이 작동이 안된다. 이유는 이전에는 withRouter를 써서 props에 넣어줬기 때문이다.



이제는 props를 넣어줄 필요가 없다

useHistory라는 라우터 훅을 이용하면 아래와 같이 사용할 수 있다.

```jsx
import { useHistory} from "react-router-dom";

export default function LoginButton() {
  const history = useHistory();
  function login() {
    setTimeout(() => {
      history.push("/");
    }, 1000);
  }
  return <button onClick={login}>로그인하기</button>;
}

```





### 6.5. 컴포넌트 간 통신



**하위 컴포넌트를 변경하기**

A의 button을 클릭하여 E를 변경

```jsx
// A 컴포넌트
<div>
  <B />
  <button>클릭</button>
</div>

// B 컴포넌트
<div>
  <C />
</div>

// C 컴포넌트
<div>
  <D />
</div>

// D 컴포넌트
<div>
  <E />
</div>

// E 컴포넌트
<div>
  {props.value}
</div>
```

1. `<A />` 컴포넌트에서 button에 onClick 이벤트를 만들고

2. button을 클릭하면, `<A />`의 state를 변경하여, `<B />`로 내려주는 props를 변경

3. `<B />`의 props가 변경되면, `<C />`의 props로 전달

4. `<C />`의 props가 변경되면, `<D />`의 props로 전달

5. `<D />`의 props가 변경되면, `<E />`의 props로 전달



```jsx
import { useState } from "react";

export default function A() {
  const [value, setValue] = useState("아직 안바뀜");
  return (
    <div>
      <B value={value} />
      <button onClick={click}>E 의 값을 바꾸기</button>
    </div>
  );

  function click() {
    setValue("E의 값을 변경");
  }
}

function B({ value }) {
  return (
    <div>
      <p>여긴 B</p>
      <C value={value} />
    </div>
  );
}

function C({ value }) {
  return (
    <div>
      <p>여긴 C</p>
      <D value={value} />
    </div>
  );
}
function D({ value }) {
  return (
    <div>
      <p>여긴 D</p>
      <E value={value} />
    </div>
  );
}
function E({ value }) {
  return (
    <div>
      <p>여긴 E</p>
      <h3>{value}</h3>
    </div>
  );
}

```



**상위 컴포넌트 변경**

E의 button을 클릭하며 A의 P를 변경

1. `<A />`에 함수를 만들고, 그 함수 안에 state를 변경하도록 구현, 그 변경으로 인해 p안의 내용을 변경

2. 만들어진 함수를 props에 넣어서, `<B />`로 전달

3. `<B / >`의 props의 함수를 `<C />`의 props로 전달

4. `<C />`의 props의 함수를 `<D />`의 props로 전달

5. `<D />`의 props의 함수를 `<E />`에서 클릭하면 props로 받은 함수를 실행



```jsx

// A 컴포넌트
<div>
  <B />
  <p>{state.value}</p>
</div>

// B 컴포넌트
<div>
  <C />
</div>

// C 컴포넌트
<div>
  <D />
</div>

// D 컴포넌트
<div>
  <E />
</div>

// E 컴포넌트
<div>
  <button>클릭</button>
</div>

```



```jsx
import { useState } from "react";

export default function A() {
  const [value, setValue] = useState("아직 안바뀜");
  return (
    <div>
      <p>{value}</p>
      <B setValue={setValue} />
    </div>
  );
}

function B({ setValue }) {
  return (
    <div>
      <p>여긴 B</p>
      <C setValue={setValue} />
    </div>
  );
}

function C({ setValue }) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={setValue} />
    </div>
  );
}

function D({ setValue }) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={setValue} />
    </div>
  );
}

function E({ setValue }) {
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={click}>클릭</button>
    </div>
  );

  function click() {
    setValue("A의 값을 변경");
  }
}


```

props로 전달하는 방식으로 애플리케이션의 전체 데이터 구조를 해결하기 어려워지기 시작.

실제 프로젝트에서는 하나 두개가 연결된 것이 아니라 광범위하게 연결되어 있기 때문에

다음이 필요하다.



### 6.6 Context API

- context API

- useContext

https://ko.reactjs.org/docs/context.html



하위 컴포넌트 전체에 데이터를 공유하는 법

- 데이터를 set
  
  - 가장 상위 컴포넌트 => 프로바이더

- 데이터를 get
  
  - 모든 하위 컴포넌트에서 접근 가능
    
    - 컨슈머로 하는 방법
    
    - 클래스 컴포넌트의 this.context로 하는 방법
    
    - 함수 컴포넌트의 useContext로 하는 방법





**데이터를 set하기**

1. 컨텍스트를 생성한다 (context API)

2. 컨텍스트.프로바이더를 사용한다

3. value를 사용한다



PersonContext.js

```js
import React from "react";

const PersonContext = React.createContext();

export default PersonContext;

```

index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PersonContext from "./contexts/PersonContext";

const persons = [
  { id: 0, name: "Kim", age: 10 },
  { id: 1, name: "Lee", age: 20 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersonContext.Provider value={persons}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>
);
```



**데이터를 get하기(1) - consumer**

1. 컨텍스트를 가져온다

2. 컨텍스트.컨슈머를 사용한다

3. value를 사용한다



Example1.jsx 

```jsx
import PersonContext from "../contexts/PersonContext";

export default function Example1() {
  return (
    <PersonContext.Consumer>
      {(persons) => (
        <ul>
          {persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      )}
    </PersonContext.Consumer>
  );
}

```



**데이터를 get하기(2) - class**

1. static contextType에 컨텍스트를 설정한다

2. this.context => value 이다



Example2.jsx

```jsx
import React from "react";
import PersonContext from "../contexts/PersonContext";

export default class Example2 extends React.Component {
  static contextType = PersonContext;

  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}

```



 **데이터를 get하기(3) - functional**

1. useContext로 컨텍스트를 인자로 호출한다

2. useContext의 리턴이 value이다



Example3.jsx

```jsx
import { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

export default function Example3() {
  const persons = useContext(PersonContext);
  return (
    <ul>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
}

```

가장 많이 사용하는 방식


