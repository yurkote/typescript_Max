import React from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    console.log(enteredText);

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
