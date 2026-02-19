import React from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
    (event.currentTarget as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
