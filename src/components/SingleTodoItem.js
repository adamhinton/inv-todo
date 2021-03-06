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
            const newTodoList = listItemCheckboxToggleCompleted(
              todoItem,
              setTodoList,
              todoList,
              completed,
              index
            );
            persistTodosToLocalStorage(newTodoList);
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

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  height: 30px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 14px 20px;
  background-color: #0d98ba;
  color: white;

  font-size: 0.75rem;
  height: 50%;
`;

const StyledTextAndCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  margin-right: 25px;
`;

const listItemCheckboxToggleCompleted = (
  todoItem,
  setTodoList,
  todoList,
  completed,
  index
) => {
  let currentTodoList = [...todoList];
  let currentTodo = { ...todoList[index] };

  currentTodo.completed = !completed;
  currentTodoList[index] = currentTodo;

  setTodoList(currentTodoList);
  persistTodosToLocalStorage(currentTodoList);

  return currentTodoList;
};

const deleteSingleListItem = (index, todoList, setTodoList) => {
  let currentTodoList = [...todoList];

  currentTodoList.splice(index, 1);

  setTodoList(currentTodoList);
  persistTodosToLocalStorage(currentTodoList);
};
