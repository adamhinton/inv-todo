import AddNewTaskForm from "../components/AddNewTaskForm";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

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
