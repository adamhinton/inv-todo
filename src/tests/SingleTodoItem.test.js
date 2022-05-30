import SingleTodoitem from "../components/SingleTodoItem";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

const fakeTodoItemIncomplete = {
  text: "Fake Todo Name",
  id: 1,
  completed: false,
};

test("[1] SingleTodoItem incomplete renders without errors", () => {
  render(
    <SingleTodoitem completed={false} todoItem={fakeTodoItemIncomplete} />
  );
});
