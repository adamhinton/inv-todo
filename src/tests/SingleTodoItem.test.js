import SingleTodoitem from "../components/SingleTodoItem";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

const fakeTodoItemIncomplete = {
  text: "Fake Todo Name Incomplete",
  id: 1,
  completed: false,
};

const fakeTodoItemComplete = {
  text: "Fake Todo Name Complete",
  id: 2,
  completed: true,
};

test("[1] SingleTodoItem incomplete renders without errors", () => {
  render(
    <SingleTodoitem completed={false} todoItem={fakeTodoItemIncomplete} />
  );
});

test("[2] SingleTodoItem complete renders without errors", () => {
  render(<SingleTodoitem completed={true} todoItem={fakeTodoItemComplete} />);
});
