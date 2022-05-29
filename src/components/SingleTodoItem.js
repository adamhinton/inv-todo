import styled from "styled-components";

const SingleTodoitem = (props) => {
  const { completed, todoItem, setTodoList, todoList } = props;
  return (
    <StyledListItem
      onClick={() => {
        listItemCheckboxToggleCompleted(
          todoItem,
          setTodoList,
          todoList,
          completed
        );
      }}
    >
      <input type="checkbox" checked={completed}></input>
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
