# Bundler

- Parcel
  
  - 구성 없는 단순한 자동 번들링
  
  - 소/중형 프로젝트에 적합

- Webpack
  
  - 매우 꼼꼼한 구성
  
  - 중/대형 프로젝트에 적합



### 

### 1. 프로젝트 생성

```git
npm init -y
```

```git
npm i -D parcel-bundler
```



- index.html 파일 생성



- package.json 설정

```json
"script": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
}
```



### 2. 정적 파일 연결

- favicon 이미지 생성

https://www.icoconverter.com/   

이미지 넣고 설정하고 convert

변환된 파일을 프로젝트 폴더로 복사하고 브라우저에서 확인해보면

파비콘 이미지가 제대로 삽입되지 않는다 dist 폴더 안을 확인해 보면 없다.

dist폴더 안으로 파비콘 파일을 바로 넣어주는 것도 방법이나 좋지 않다.

자동으로 넣어주는 패키지를 이용한다.

구글에서 검색 parcel plugin static files copy

설치

```git
npm i -D parcel-plugin-static-files-copy
```

package.json 설정

```json
  "staticFiles": {
    "staticPath": "static"
  }
```

번들러의 도움을 받아 static이라는 이름의 폴더를 dist에 붙여넣기를 해주는 기능설정

파비콘 파일을 static폴더로 이동

다시 브라우저에서 확인하면 파비콘이 나타난다.



### 3. autoprefixer


