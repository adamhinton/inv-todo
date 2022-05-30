import TodosContainer from "../components/TodosContainer";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

const fakeTodoList = [
  {
    text: "Task one",
    id: 1,
    completed: true,
  },
];

test("[1] TodosContainer renders without errors", () => {
  render(<TodosContainer todoList={fakeTodoList} />);
});

test("[2] Correct heading appears in TodoContainer isCompleted=false", () => {
  render(<TodosContainer todoList={fakeTodoList} isCompleted={false} />);

  const toDoHeading = screen.getByText("To-Do");
  expect(toDoHeading).toBeVisible();
});

test("[3] Correct heading appears in TodoContainer isCompleted=true", () => {
  render(<TodosContainer todoList={fakeTodoList} isCompleted={true} />);

  const toDoHeading = screen.getByText("Completed");
  expect(toDoHeading).toBeVisible();
});

test("[4] TodosContainer isCompleted=true matches snapshot from 5.29.22", () => {
  const component = renderer.create(
    <TodosContainer todoList={fakeTodoList} isCompleted={true} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("[5] TodosContainer isCompleted=false matches snapshot from 5.29.22", () => {
  const component = renderer.create(
    <TodosContainer todoList={fakeTodoList} isCompleted={false} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
