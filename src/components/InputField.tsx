import React, { useRef } from "react";
import "./styles.css";

// types passed to props destructured
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; // setter react type
  handleAdd: (e: React.FormEvent) => void; // function type using event type and returning nothing (void)
}

// React Functional Component type
const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null); // React.createRef();
  // targeting the input field with HTMLInputElement type

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
