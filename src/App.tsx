import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div>
        <Todos
          items={[
            { id: "1", text: "Learn React" },
            { id: "2", text: "Learn TypeScript" },
          ]}
        />
      </div>
    </>
  );
}

export default App;
