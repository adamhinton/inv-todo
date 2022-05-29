import Header from "./components/Header";
import { useState } from "react";
import styled from "styled-components";
import AddNewTaskForm from "./components/AddNewTaskForm";

function App() {
  // later on, add localStorage fxnality and get this from localStorage (or empty array if none)
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <StyledMain>
          <AddNewTaskForm setTodoList={setTodoList} />
        </StyledMain>
      </div>
    </div>
  );
}

export default App;

const StyledMain = styled.main`
  width: 40%;
  border: 3px solid blue;
`;

// todoList structure:
// [
//   {
//     id: number,
//     text: string,
//     isCompleted: boolean,
//   },
// ];
