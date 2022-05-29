//completed true false - passed in from App
// todoList and setTodoList passed in from app
// dynamic header
// filter over todoList looking for isCompleted = {isCompleted}
// checkbox : just completed boolean
// onClick:  just set completed to !completed. Update state
// delete button should be same

import styled from "styled-components";
import SingleTodoitem from "./SingleTodoItem";

const TodosContainer = (props) => {
  const { setTodoList, todoList, isCompleted } = props;

  return (
    <section>
      <Styledh2>{isCompleted ? "Completed" : "To-Do"}</Styledh2>
      <ul>
        {todoList.map((item) => {
          return item.completed === isCompleted ? (
            <SingleTodoitem
              key={item.id}
              completed={isCompleted}
              todoItem={item}
              setTodoList={setTodoList}
              todoList={todoList}
            />
          ) : null;
        })}
      </ul>
    </section>
  );
};

export default TodosContainer;

const Styledh2 = styled.h2`
  border-bottom: 1px solid lightgrey;
  padding-bottom: 2%;
  margin-bottom: 0;
`;
