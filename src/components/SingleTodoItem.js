const SingleTodoitem = (props) => {
  const { completed, todoItem } = props;
  console.log("blah blah blah");
  return (
    <li>
      <input type="checkbox" checked={completed}></input>
    </li>
  );
};

export default SingleTodoitem;
