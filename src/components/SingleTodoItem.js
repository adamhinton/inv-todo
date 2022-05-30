// GOAL: Add functionality to delete single item
// Pass in index in .map to SingleTodoItem
// Code delete icon (trash icon)
// Onclick: Takes in todoList, setTodoList, index
// splice it out of todoList based on index - use checkbox onClick as format
// Make sure not to update state object directly - need to make new array

import styled from "styled-components";
import { StyledButton } from "./AddNewTaskForm";

const SingleTodoitem = (props) => {
  const { completed, todoItem, setTodoList, todoList } = props;
  return (
    <StyledListItem>
      <input
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
      ></input>

      <h4>{todoItem.text}</h4>

      <StyledButton
        onClick={() => {
          console.log("jvdiasofjasdi");
        }}
      >
        Delete
      </StyledButton>
    </StyledListItem>
  );
};

export default SingleTodoitem;

const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  /* justify-content: space-between; */
`;

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
};
