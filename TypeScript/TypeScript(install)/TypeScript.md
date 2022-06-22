# TypeScript

- 자바스크립트에 타입을 적용

- 에러를 잡거나 고치는 시간을 줄여준다 코드가 실행되기 전에

- 타입스크립트는 언어이다.

- 순수한 자바스크립트로 컴파일 해준다.
  
  - 타입스크립트는 Compiled Language
    
    - 컴파일 필요
    
    - 컴파일러가 필요
    
    - 컴파일하는 시점이 필요
    
    - 컴파일된 결과물을 실행
    
    - 컴파일된 결과물을 실행하는 시점이 필요
  
  - 자바스크립트는 Interpreted Language
    
    - 컴파일이 필요 X
    
    - 컴파일러가 필요 X
    
    - 컴파일하는 시점 X
    
    - 코드 자체를 실행
    
    - 코드를 실행하는 시점 O => 런타임

- TS Editor 에서 작성된 파일을 Browser나 Node환경에서 바로 출력이 안됨
  
  그래서 TypeScript Compiler가 필요함



### 설치

- 실행환경 설치
  
  - node.js / browser
    
    - node.js
      
      - Chrome의 V8 JavaScript Engine을 사용하여, 자바스크립트를 해석하고
        
        OS 레벨에서의 API를 제공하는 서버사이드 용 자바스크립트 런타임 환경
    
    - browser
      
      - HTML을 동적으로 만들기 위해 브라우저에서 자바스크립트를 해석하고
        
        DOM을 제어할 수 있도록 하는 자바스크립트 런타임 환경



- node.js 설치
  
  - https://nodejs.org
  
  - node.js version manager
    
    - nvm
      
      - https://github.com/creationix/nvm
      
      - https://github.com/coreybutler/vnm-windows
    
    - n
      
      - https://github.com/tj/n

- 타입스크립트 컴파일러 설치
  
  - npm
    
    - npm i typescript -g
    
    - node_modules/.bin/tsc
    
    - tsc source.ts


