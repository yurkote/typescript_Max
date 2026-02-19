import { useState } from "react";
import "./App.css";
import Todo from "./components/models/todo";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    // setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <>
      <div>
        <NewTodo onAddTodo={addTodoHandler} />
        <Todos items={todos} onRemoveTodo={removeTodoHandler} />
      </div>
    </>
  );
}

export default App;
