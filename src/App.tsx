import "./App.css";
import Todo from "./components/models/todo";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addTodoHandler = (todoText: string) => {
    console.log(todoText);
  };
  return (
    <>
      <div>
        <NewTodo onAddTodo={addTodoHandler} />
        <Todos items={todos} />
      </div>
    </>
  );
}

export default App;
