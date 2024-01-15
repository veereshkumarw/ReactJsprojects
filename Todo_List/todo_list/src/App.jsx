import react, { useState } from "react";
import "./App.css";
import AddTodoList from "./components/AddTodoList";
import List from "./components/List";

function App() {
  const [inp, setInp] = useState("");
  const [todos, setTodos] = useState([]);
  // const[key, setkey] = useState(0);

  // setkey(todos.length);

  return (
    <div className="App">
      <AddTodoList
        inp={inp}
        setinp={setInp}
        todos={todos}
        setTodos={setTodos}
      />

      <List input={inp} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
