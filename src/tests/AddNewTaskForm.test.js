import AddNewTaskForm from "../components/AddNewTaskForm";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

test("[1] AddNewTaskForm renders without errors", () => {
  render(<AddNewTaskForm />);
});

test("[2] Label, form field and add task button are visible", () => {
  render(<AddNewTaskForm />);

  const addNewTaskLabel = screen.getByText("Add New Task");
  const addNewTaskInput = screen.getByTestId("add-new-task-input");
  const addNewTaskButton = screen.getByText("+ Add Task");

  expect(addNewTaskLabel).toBeVisible();
  expect(addNewTaskInput).toBeVisible();
  expect(addNewTaskButton).toBeVisible();
});

test("[3] Matches snapshot from 5.29.22", () => {
  const component = renderer.create(<AddNewTaskForm />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("[4] Input text changes when user types", () => {
  render(<AddNewTaskForm />);
  const addNewTaskInput = screen.getByTestId("add-new-task-input");

  expect(addNewTaskInput).toHaveValue("");

  userEvent.type(addNewTaskInput, "abc");
  expect(addNewTaskInput).toHaveValue("abc");
});
