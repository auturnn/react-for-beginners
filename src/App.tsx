import React, { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("bye");
  }

  function hiFn() {
    console.log("hi");
    return byeFn; //cleanUp (컴포넌트를 소멸시킬때 실행될 함수)
  }

  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing]: any = useState(false);
  const onClick = () => {
    setShowing((prev: boolean) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
