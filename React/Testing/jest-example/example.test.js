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
