import "./App.css";
import Todo from "./components/models/todo";
import Todos from "./components/Todos";

function App() {
  const todos = [
    new Todo("1", "Learn React"),
    new Todo("2", "Learn TypeScript"),
  ];
  return (
    <>
      <div>
        <Todos items={todos} />
      </div>
    </>
  );
}

export default App;
