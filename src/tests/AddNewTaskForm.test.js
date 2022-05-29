import AddNewTaskForm from "../components/AddNewTaskForm";
import { render, screen } from "@testing-library/react";

test("[1] AddNewTaskForm renders without errors", () => {
  render(<AddNewTaskForm />);
});
