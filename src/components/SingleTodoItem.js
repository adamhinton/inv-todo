import styled from "styled-components";

const SingleTodoitem = (props) => {
  const { completed, todoItem } = props;
  return (
    <StyledListItem>
      <input type="checkbox" checked={completed}></input>
    </StyledListItem>
  );
};

export default SingleTodoitem;

const StyledListItem = styled.li`
  list-style-type: none;
`;
