import Header from "./components/Header";
import { useState } from "react";
import styled from "styled-components";
import AddNewTaskForm from "./components/AddNewTaskForm";
import TodosContainer from "./components/TodosContainer";
import { useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const key = "todos";

    const persistedTodos = JSON.parse(window.localStorage.getItem(key)) || [];
    setTodoList(persistedTodos);
  }, []);

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

export const persistTodosToLocalStorage = (todoList) => {
  const key = "todos";
  window.localStorage.setItem(key, JSON.stringify(todoList));
};
