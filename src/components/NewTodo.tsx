const NewTodo = () => {
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;