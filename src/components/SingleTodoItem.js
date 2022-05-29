import styled from "styled-components";

const SingleTodoitem = (props) => {
  const { completed, todoItem } = props;
  return (
    <StyledListItem>
      <input type="checkbox" checked={completed}></input>
      <h3>{todoItem.text}</h3>
    </StyledListItem>
  );
};

export default SingleTodoitem;

const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
