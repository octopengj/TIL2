## 4. Router

*학습과정인 현 시점에서 router 버전은 6이나 학습은 5로 하고 있는 중이다.*

*학습 후 버전 6문법도 학습해야 한다.* *라우터 버전 6 변경사항 확인할 것*

[LearnFit] ([LearnFit](https://www.learnfit.ai/path/igGfnXzZMr))

package.json에서 "react-router-dom": "^6.3.0"을 

"react-router-dom": "^5.3.0"으로 수정 후 진행함

### 4.1. Routing

- SPA 라우팅 과정
  
  1. 브라우저에서 최초에 '/'경로로 요청을 하면
  
  2. React Web App을 내려준다.
  
  3. 내려받은 React App에서 '/' 경로에 맞는 컴포넌트를 보여준다.
  
  4. React App에서 다른 페이지로 이동하는 동작을 수행하면
  
  5. 새로운 경로에 맞는 컴포넌트를 보여준다.

react router-dom

```git
npm i react-router-dom
```

- cra에 기본 내장된 패키지가 아니다.

- react-router-dom은 facebook의 공식 패키지는 아니다.

- 가장 대표적인 라우팅 패키지이다.



### 4.2. Dynamic 라우팅

URLSearchParams

https://developer.mozilla.org/ko/docs/Web/API/URLSearchPar

- path에 들어오는 id를 사용하는 방식





query-string

```git
npm i query-string 
```

- queryString으로 들어오는 방식





## 4.3. Switch, NotFound

- 여러 Route 중 순서대로 먼저 맞는 하나만 보여준다.

- exact를 뺄 수 있는 로직을 만들 수 있다.

- 가장 마지막에 어떤 path에도 맞지 않으면 보여지는 컴포넌트를 설정해서,
  
  Not Found 페이지를 만들 수 있다.



### 4.4 JSX 링크로 라우팅 이동

**Link 사용**

```jsx
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Switch>
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



**component/Links**

App.js

```js
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Links from './components/Links';

function App() {
  return (
    <BrowserRouter>
    <Links />
    <Switch>
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

components/ Links.jsx

```jsx
import {Link} from "react-router-dom";


export default function Links() {
  return (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
    <li>
      <Link to="/profile/1">Profile/1</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/about?name=mark">About?name=mark</Link>
    </li>
  </ul>
  );
}
```



NavLink

NavLinks.jsx

```jsx
import {NavLink} from "react-router-dom";

const activeStyle = {color: 'green'};

export default function NavLinks() {
  return (
  <ul>
    <li>
      <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
    </li>
    <li>
      <NavLink to="/profile" exact activeStyle={activeStyle}>Profile</NavLink>
    </li>
    <li>
      <NavLink to="/profile/1" exact activeStyle={activeStyle}>Profile/1</NavLink>
    </li>
    <li>
      <NavLink to="/about" exact activeStyle={activeStyle} 
        isActive={(match, location) => {
        console.log(location);
        return match !== null && location.search === "";
      }}>About</NavLink>
    </li>
    <li>
      <NavLink to="/about?name=mark" exact activeStyle={activeStyle}
        isActive={(match, location) => {
          console.log(location);
          return match !== null && location.search === "?name=mark";
      }}>About?name=mark</NavLink>
    </li>
  </ul>
  );
}
```





### 4.5. JS로 라우팅 이동

Login.jsx

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

LoginButton.jsx

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

App.js

```js

```


