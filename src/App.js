import Header from "./components/Header";
import { useState } from "react";
import styled from "styled-components";
import AddNewTaskForm from "./components/AddNewTaskForm";
import TodosContainer from "./components/TodosContainer";

function App() {
  // later on, add localStorage fxnality and get this from localStorage (or empty array if none)
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <Header setTodoList={setTodoList} />
        <StyledMain>
          <AddNewTaskForm todoList={todoList} setTodoList={setTodoList} />
          <TodosContainer
            isCompleted={false}
            todoList={todoList}
            setTodoList={setTodoList}
          />
          <TodosContainer
            isCompleted={true}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        </StyledMain>
      </div>
    </div>
  );
}

export default App;

const StyledMain = styled.main`
  width: 900px;

  @media (max-width: 1000px) {
    width: 70%;
  }

  @media (max-width: 850px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

// todoList structure:
// [
//   {
//     id: number,
//     text: string,
//     isCompleted: boolean,
//   },
// ];
