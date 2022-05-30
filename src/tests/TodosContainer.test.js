import TodosContainer from "../components/TodosContainer";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

const fakeTodoList = [
  {
    text: "Task one",
    id: 1,
    completed: false,
  },
];

test("[1] TodosContainer renders without errors", () => {
  render(<TodosContainer todoList={fakeTodoList} />);
});

test("[2] Correct heading appears in TodoContainer completed=false", () => {
  render(<TodosContainer todoList={fakeTodoList} completed={false} />);

  const toDoHeading = screen.getByText("To-Do");
  expect(toDoHeading).toBeVisible();
});
