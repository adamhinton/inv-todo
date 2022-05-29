import Header from "./components/Header";
import { useState } from "react";

function App() {
  // later on, add localStorage fxnality and get this from localStorage (or empty array if none)
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default App;
