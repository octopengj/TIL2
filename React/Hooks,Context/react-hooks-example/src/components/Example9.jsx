import { useState, useMemo } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Example9() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "Kim", age: 10 },
    { name: "Lee", age: 20 },
  ]);

  // useMemo의 첫번째 인자로 함수를 받는다.
  // 디팬더시 리스트를 두번째 인자로 받는다.
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
