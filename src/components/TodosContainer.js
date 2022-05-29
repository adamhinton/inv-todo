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
    <section>
      <h2>{isCompleted ? "Completed" : "To-Do"}</h2>
      <ul>
        {todoList.map((item) => {
          return item.completed === isCompleted ? (
            <SingleTodoitem completed={isCompleted} todoItem={item} />
          ) : null;
        })}
      </ul>
    </section>
  );
};

export default TodosContainer;
