//css모듈화
import styled from "./Button.module.css";

interface button {
  text: string;
  fontSize?: number;
}
function Button({ text, fontSize }: button) {
  return (
    <button className={styled.btn} style={{ fontSize }}>
      {text}
    </button>
  );
}

export default Button;
