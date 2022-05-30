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
