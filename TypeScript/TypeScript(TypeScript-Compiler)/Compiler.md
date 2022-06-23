## TypeScript Compiler

### 1. Compilation Context

[README - TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

[Compilation Context - TypeScript Deep Dive](https://basarat.gitbook.io/typescript/project/compilation-context)



### 2. tsconfig schema

http://json.schemastore.org/tsconfig



**최상위 프로퍼티**

- compileOnSave

- extends

- compileOptions

- files

- include

- exclude

- references



### 3. compileOnSave

프로젝트를 save할때 compile하겠다는 설정

- true  / false (default fase)

- 조건
  
  - Visual Studio 2015 with TypeScript 1.8.4이상
  
  - atom-typescript 플러그인 설치
    
    [GitHub - TypeStrong/atom-typescript: The only TypeScript package you will ever need](https://github.com/TypeStrong/atom-typescript#compile-on-save)

tsconfig.json 파일에서 제일 상단에

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,          
```

아래와 같이 작성

```json
{
  "compileOnSave": true,
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,         
```





### 4. extends

상속을 받아올 부모설정의 path를 적는다.

- 파일 경로명을 string타입으로 적는다.

[GitHub - tsconfig/bases: Hosts TSConfigs to extend in a TypeScript app, tuned to a particular runtime environment](https://github.com/tsconfig/bases)



기존 tsconfig.json에서 strict모든 를 끄고

새로운 base.json을 만든다고 가정 할 때

```json
// tsconfig.json
{
/* Type Checking */
    "strict": false,    
 } 
```

base.json 파일을 만들고

```json
// base.json
{
    "compilerOptions" : {
      "strict": true
  }
}
```

tsconfig.json에 입력

```json
{
  "extends": "./base.json",
  "compileOnSave": true,
  "compilerOptions"{
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": : {
```

현재 만들어진 프로젝트에서는 strict: true를 사용하게 된다.



### 5. files, include, exclude

files나 include 프로퍼티가 tsconfig에 없으면 컴파일러는 모든 파일을 컴파일 하려고 한다.

files에 셋팅되어 있는 파일들이 가장 강력하고 exclude로 제외가 된 파일이 있더라도 files에 

셋팅되어 있으면 컴파일하게 된다.



- 셋다 설정이 없으면, 전부다 컴파일

- files
  
  - 상대 혹은 절대 경로의 리스트 배열
  
  - exclude 보다 강력

- include, exclude
  
  - glob 패턴 (비슷 .gitignore)
  
  - include
    
    - exclude 보다 약함
    
    - *같은걸 사용하면, .ts / .tsx / .d.ts 만 include(allowJS 를 사용해야 .js)
  
  - exclude
    
    - 설정 안하면 4가지(node_modules, bower_components, jspm_packages, < ourDir >)를 default로 제외
    
    - < ourDir >은 항상 제외(include에 있어도)



### 6. compileOptions - typeRoots, types

타입이 없는 자바스크립트 라이브러리를 사용할 경우에 타입을 지정해주는 역할을 하는 도구



예를 들어 react를 사용한다고 했을 때

npm i react 설치후 

```typescript
import React from 'react';
```

를 작성하면 오류가 발생한다.

```typescript
import React from 'react';
//'React'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.ts(6133)
// 해당 항목이 있는 경우 'npm i --save-dev @types/react'을(를) 시도하거나, 'declare module 'react';'을(를) 포함하는 새 선언(.d.ts) 파일 추가ts(7016)
```

여기서 말하는 types는 @types를 얘기한다.



npm i --save -dev @types/react 설치를 하면 오류가 없어진다.

파일 목록에서 node_modules에서 @types에 react 폴더가 생성된다.

그 폴더의 index.d.ts를 불러와서 사용하게 된다.



- typeRoots를 사용하면 배열 안에 들어있는 경로들 아래서만 가져온다.

- types를 사용하면 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아온다.

- []빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것이다.

- typeRoots와 types를 같이 사용하지 않는다.



### 7. compileOptions - target 과 lib

타입스크립트 코드가 어떤 런타임에서 실행하는지 결정해주는 target

최종적으로 실행하고자하는 실행환경에 맞게 기본타입을 결정해주는 lib



예를 들어 target이 es5로 되어 있으면

타입스크립트에서 arrow function을 사용하고 컴파일하면 arrow function이 function으로 변경 되어 컴파일 될 것이고 es6로 되어 있으면 arrrow function이 그대로 컴파일 된다.



### 8. compileOptions  - outDir, outFile, rootDir

compile시 out디렉토리 설정이나  root디렉토리를 설정할 수 있다.



### 9. compileOptions - strict

stirct를 true를 설정하는게 기본이다.


