const SingleTodoitem = (props) => {
  const { completed, todoItem } = props;
  console.log("blah blah blah");
  return <div>{todoItem.text}</div>;
};

export default SingleTodoitem;
