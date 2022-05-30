// GOAL: Add functionality to delete single item
// Pass in index in .map to SingleTodoItem
// Code delete icon (trash icon)
// Onclick: Takes in todoList, setTodoList, index
// splice it out of todoList based on index - use checkbox onClick as format
// Make sure not to update state object directly - need to make new array

import styled from "styled-components";

const SingleTodoitem = (props) => {
  const { completed, todoItem, setTodoList, todoList, index } = props;
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
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
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

const deleteSingleListItem = (index, todoList, setTodoList) => {
  let currentTodoList = [...todoList];
  currentTodoList.splice(index, 1);
  setTodoList(currentTodoList);
};

const StyledButton = styled.button`
  border: none;
  background-color: #0d98ba;
  color: white;
  border-radius: 10px;
  padding: 2% 3%;
  font-size: 0.75rem;
  height: 50%;
  display: flex;
  align-items: center;
  /* margin-left: 100%; */
`;
