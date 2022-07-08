## 7. React Testing

### 7.1. JavaScript Unit Test & Jest

https://jestjs.io/docs/using-matchers

```git
   npm init -y

   npm i jest -D
```

package.json에서 수정

package.json

```json
"script":{
    "test": "jest"
}
```

테스트 코드 작성

example1.test.js

```js
test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});
```

test실행

```git
npm test
```

매번 npm test로 실행하는 것보다 값이 바뀌면 반복적으로 테스트 하기를 원하면

```git
npx jest --watchAll
```

여러개를 테스트할 때는 describe로 묶는다

```js
describe("expect test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});
```

이런 테스트들이 가능하다

```js
describe("expect test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
  test("37 to equal 37", () => {
    expect(37).toBe(37);
  });
  test("{age: 10} to equal {age: 10}", () => {
    expect({ age: 10 }).toEqual({ age: 10 });
  });
  test(".toHaveLength", () => {
    expect("hello").toHaveLength(5);
  });
  test(".toHaveProperty", () => {
    expect({ name: "Kim" }).toHaveProperty("name");
    expect({ name: "Kim" }).toHaveProperty("name", "Kim");
  });
  test(".toBeDefined", () => {
    expect({ name: "Kim" }.name).toBeDefined();
  });
  test(".toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  test(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });
  test(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  test(".toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});
```

### 7.2. React Component Test


