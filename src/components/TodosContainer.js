//completed true false - passed in from App
// todoList and setTodoList passed in from app
// dynamic header
// filter over todoList looking for isCompleted = {isCompleted}
// checkbox : just completed boolean
// onClick:  just set completed to !completed. Update state
// delete button should be same

import SingleTodoitem from "./SingleTodoItem";

const TodosContainer = (props) => {
  const { setTodoList, todoList, isCompleted } = props;

  return (
    <div>
      {todoList.map((item) => {
        return item.completed === isCompleted ? (
          <SingleTodoitem completed={isCompleted} todoItem={item} />
        ) : null;
      })}
    </div>
  );
};

export default TodosContainer;
