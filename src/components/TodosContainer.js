//completed true false - passed in from App
// todoList and setTodoList passed in from app
// dynamic header
// filter over todoList looking for isCompleted = {isCompleted}
// checkbox : just completed boolean
// onClick:  just set completed to !completed. Update state
// delete button should be same

const TodosContainer = (props) => {
  const { setTodoList, todoList, isCompleted } = props;
  console.log("todoList:", todoList);
  //   console.log("todoList, isCompleted:", todoList, isCompleted);

  //   return (
  //     <div>
  //       {todoList.filter((item) => {
  //         console.log("item:", item);
  //       })}
  //     </div>
  //   );
};

export default TodosContainer;
