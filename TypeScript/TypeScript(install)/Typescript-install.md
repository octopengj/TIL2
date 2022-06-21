## git-bash 나 커맨드라인에서 설치
### 글로벌설치
- 글로벌 설치
  - npm i typescript -g
- 컴파일러 사용 명령어
  - tsc 파일명.ts
- 파일 생성 (에디터 설치 전이라면)
  - nano 파일명.ts
  - 그 안에서 자바스크립트 코드 작성가능
- 컴파일러 이후
  - 같은 경로에 파일명.js파일이 생성 됨
  - cat 파일명.js 확인 가능
  
- 같은 경로에 있는 모든 ts파일 컴파일 할 때 설정값을 자동으로 디폴트 해주는 명령어가 필요
  - tsc --init
  - tsconfig.json가 생성됨
  - 이후 tsc만 입력하면 전부 컴파일 됨

- 매번 컴파일 하기 싫을 때
  - tsc -w
  - w옵션을 붙여서 watch 모드를 실행하면 된다.

### 프로젝트에 설치
- 글로벌로 된 타입스크립트 제거
  - npm uninstall typescript -g
  - rm -rf 폴더명
  - mkdir 폴더명 으로 새로 설치

- 프로젝트 폴더 이동 후 설치
  - cd 폴더명
  - npm init -y
    - npm init으로 설치할때 나오는 질문을 건너뛰려면 모두 -y
  - package.json 파일이 생성됨
  ```json
  {
  "name": "TypeScript-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
  }
  ```

  - npm i typescript 로 타입스크립트 설치
    - -g 붙일 필요 없다.

  ```json
  {
  "name": "TypeScript-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "typescript": "^4.7.4"
  }
  }
  ```
  - dependencies에 typescript가 생김

- 실행
  - ls로 목록을 확인하면 node_modules가 있고
  그 안에 컴파일러가 설치되어 있다.
  - 실행 명령어 
  node_modules/.bin/tsc
  - 글로벌로 설치했을 때는 
  tsc만 입력하면 됐는데 길다.
  npm 버전이 업이 되면서 새로운 명령어가 생겼다.-> npx
  - npx tsc를 사용하기 위해서 
  tsconfig.json 파일이 필요하다
  - npx tsc --init으로 생성

- 실행(package.json)
  - scripts 수정해서 사용가
  "build" : "tsc" 
  - npm run build

- watch 모드
  - npx tsc -w
  - npm run build:watch


## VSCODE에서 설치
- test.ts 파일 생성
- 터미널에서 폴더를 npm 프로젝트로 만들어 줌
  - npm init -y
- 타입스크립트 설치(개발자모드)
  - npm i typescript -D
  - devDependencies에 추가됨

