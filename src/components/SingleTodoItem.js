import styled from "styled-components";

const SingleTodoitem = (props) => {
  const { completed, todoItem } = props;
  return (
    <StyledListItem>
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
