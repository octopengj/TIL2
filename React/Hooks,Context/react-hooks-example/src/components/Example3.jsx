import React from "react";

// useState => { count: 0}
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setState({ count: state.count + 1 });
  }
}
