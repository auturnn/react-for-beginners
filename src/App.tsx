import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDoList, setToDoList] = useState([""]);
  const onChange = (event: any) => setTodo(event.target.value);
  const onDeleted = (todoIndex: number) => {
    setToDoList((currentArr: string[]) =>
      currentArr.filter((_, idx) => idx !== todoIndex)
    );
  };
  const onAdded = (event: any) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDoList((prevArr: string[]) => [toDo, ...prevArr]); //state는 언제나 새로 생성
    setTodo(""); //empty value
  };
  return (
    <div>
      <h1>My Simple ToDo App</h1>
      <ul>
        {toDoList.map((item, idx) => {
          if (item === "") {
            return null;
          }
          return (
            <li key={idx}>
              <span>{item}</span>
              <button
                style={{
                  backgroundColor: "initial",
                  borderColor: "black",
                  borderRadius: "6px",
                  marginLeft: "10px",
                  color: "red",
                }}
                onClick={() => onDeleted(idx)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <hr />
      <input
        type="text"
        value={toDo}
        onChange={onChange}
        placeholder="write your to do"
      />
      <button onClick={onAdded}>add</button>
    </div>
  );
}

export default App;
