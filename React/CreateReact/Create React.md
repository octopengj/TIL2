## 3. Create React

### 3.1. Create React App



```git
npx create-react-app 파일명
```



- 개발
  
  ```git
  npm run start
  ```

- 배포
  
  ```git
  npm run build
  ```

- 테스트
  
  ```git
  npm run test
  ```

- eject
  
  ```git
  npm run eject
  ```
  
  - eject를 사용하면 cra로 만든 프로젝트에서 cra를 제거한다.
    
    이는 돌이킬 수 없기 때문에 신중하게 결정





### 3.2. ESLint

https://eslint.org



```git
npm init -y        npm프로젝트 만들기

npm i eslint -D    eslint -D로 설치

npm eslint --init   eslint 초기화
```

또는 마켓 설치

별도로 추가하고 싶은 항목이 있으면

rules에 추가하여 사용한다.





### 3.3. Prettier

https://prettier.io

```git
npm init -y        npm프로젝트 만들기

npm i prettier -D    prettier -D로 설치
```

또는 마켓 설치



### 3.4. husky

git hooks made easy

github.com/typicode/husky



```git
npm init -y
```

모듈을 설치하기 전에 깃을 init해준다

```git
git init
```

깃이 설치되기 전에 husky를 설치하면 훅을 셋팅 할 수 없다.

```git
npm i husky -D
```

프로젝트 터미널에서 git hook  설치

```git
npx husky install
```

package.json 파일에서 script에  추가

나중에 다시 이 패키지를 다른 곳에서 설치해 사용할 때도 문제없이 prepare가 돌면서 깃훅이 활성화 된다.

```json
"scripts": {
    "prepare": "husky install"
}
```

pre-commit 생성

```git
npx husky add .husky/pre-commit "npm test"
```

commit 하기 직전에 오류가 있으면 커밋이 안된다.



### 3. 5. lint-staged

run linters on git staged files

husky 설치 후 script 추가 

lint-staged 설치

```git
npm i lint-staged -D
```

훅 연결

```git
 npx husky add .husky/pre-commit "npx lint-staged"
```



커밋을 하기 전에 npx lint-staged라는 명령어가 실행 될 것이다.

이제 lint-staged가 뭘 할건지 규정을 해줘야 한다.

package.json

```git
  "lint-staged": {
    "**/*.js": [
      "eslint --fix",
      "git add"
    ]
  },
```

어떤 js파일이 스테이지에 올라오면 eslint에 fix를 하고 그 변경사항을 다시 git에 add하겠다는 내용





### 3.6. 리액트 컴포넌트 디버깅

React Developer Tools 크롬 웹 스토어에서 설치




