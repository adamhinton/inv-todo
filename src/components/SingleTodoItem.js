import styled from "styled-components";
import { persistTodosToLocalStorage } from "../App";

const SingleTodoitem = (props) => {
  const { completed, todoItem, setTodoList, todoList, index } = props;
  return (
    <StyledListItem>
      <StyledTextAndCheckbox>
        <StyledCheckbox
          type="checkbox"
          data-testid="todo-checkbox"
          defaultChecked={completed}
          onClick={() => {
            listItemCheckboxToggleCompleted(
              todoItem,
              setTodoList,
              todoList,
              completed
            );
          }}
        ></StyledCheckbox>

        <h4>{todoItem.text}</h4>
      </StyledTextAndCheckbox>

      <StyledButton
        onClick={() => {
          deleteSingleListItem(index, todoList, setTodoList);
        }}
      >
        Delete
      </StyledButton>
    </StyledListItem>
  );
};

export default SingleTodoitem;

const listItemCheckboxToggleCompleted = (
  todoItem,
  setTodoList,
  todoList,
  completed
) => {
  let currentTodoList = [...todoList];
  let currentTodo = { ...todoList[todoItem.id - 1] };

  currentTodo.completed = !completed;
  currentTodoList[todoItem.id - 1] = currentTodo;

  setTodoList(currentTodoList);
  persistTodosToLocalStorage(currentTodoList);
};

const deleteSingleListItem = (index, todoList, setTodoList) => {
  let currentTodoList = [...todoList];

  currentTodoList.splice(index, 1);

  setTodoList(currentTodoList);
  persistTodosToLocalStorage(currentTodoList);
};

const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #0d98ba;
  color: white;
  border-radius: 10px;
  padding: 14px 20px;
  font-size: 0.75rem;
  height: 50%;
  display: flex;
  align-items: center;
`;

const StyledTextAndCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  margin-right: 25px;
`;
