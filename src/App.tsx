import React, { useState, useEffect } from "react";
// import Button from "./Button";

function App() {
  const [counter, setValue]: any = useState(0);
  const [keyword, setKeyword]: any = useState("");
  const onChange = (event: any) => {
    setKeyword(event.target.value);
  };
  const onClick = () => setValue((prev: number) => prev + 1);

  //어떤일이 일어나도 아래의 코드는 딱한번만 실행
  useEffect(() => {
    console.log("running only one time");
  }, []);
  //keyword가 변할때만 실행할 것이다.
  //useEffect = 변할때 실행하는 함수, trigger가 되는 대상(dependencyList)
  useEffect(() => {
    if (keyword !== "") {
      console.log(keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input value={keyword} type="text" onChange={onChange} />
      {/* <h1>Start React!!</h1>
      <Button text="hi!" fontSize={20} /> */}
      {counter}
      <button onClick={onClick}>plus</button>
    </div>
  );
}

export default App;
