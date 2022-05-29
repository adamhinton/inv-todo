import styled from "styled-components";

const SingleTodoitem = (props) => {
  const { completed, todoItem } = props;
  return (
    <li>
      <input type="checkbox" checked={completed}></input>
    </li>
  );
};

export default SingleTodoitem;
