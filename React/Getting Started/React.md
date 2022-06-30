# React

## 1. React Getting Started

### 1.1. React Concept

- React Client Side Rendering (CSR)
  
  - JS가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행되기 전까지는 화면이 보이지 않음.
  
  - JS가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후, 화면이 보이면서 유저가 인터렉션 가능

- React Server Side Rendering (SSR)
  
  - JS가 전부 다운로드 되지 않아도, 일단 화면은 보이지만 유저가 사용 할 수 없음.
  
  - JS가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후 , 유저가 사용 가능
  
  

### 1.2. 개발 환경 체크

- Node.js
  
  - installer
  
  - nvm

- Browser

- Git

- VSCode



### 1.3. React 라이브러리 (1)

```js
// 1. 리액트 컴포넌트 => HTMLElement 연결하기
import ReactDOM from 'react-dom';

// 2. 리액트 컴포넌트 만들기
import React from 'react';
```

- ReactDOM

```js
ReactDOM.render(
    <Hello name='world' />,
    
    document.getElementById('hello-example')
);
```

JS, JSX 문법을 사용한 {React 컴포넌트}를  HTMLElement에 연결해 주는 것이 ReactDOM.render이라 생각하면 된다.

만들어진 리액트 컴포넌트를 실제 HTMLElement에 연결할 때 ReactDOM라이브러리를 이용한다.

https://reactjs.org/docs/react-dom.html



- CDN을 이용해서 작업을 할 수도 있다.


