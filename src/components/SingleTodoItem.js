import styled from "styled-components";

const SingleTodoitem = (props) => {
  const { completed, todoItem, setTodoList, todoList } = props;
  return (
    <StyledListItem>
      <input
        type="checkbox"
        checked={completed}
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

// pass in list item object
// pass in setTodoList
// pass in TodoList

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
