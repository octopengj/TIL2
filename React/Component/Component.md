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


