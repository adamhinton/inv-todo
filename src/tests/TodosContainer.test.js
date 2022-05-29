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
