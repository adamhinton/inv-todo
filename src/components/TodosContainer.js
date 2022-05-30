import styled from "styled-components";
import SingleTodoitem from "./SingleTodoItem";

const TodosContainer = (props) => {
  const { setTodoList, todoList, isCompleted } = props;

  return (
    <section>
      <Styledh2>{isCompleted ? "Completed" : "To-Do"}</Styledh2>
      <ul>
        {todoList.map((item, index) => {
          return item.completed === isCompleted ? (
            <SingleTodoitem
              key={index}
              completed={isCompleted}
              todoItem={item}
              setTodoList={setTodoList}
              todoList={todoList}
              index={index}
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
