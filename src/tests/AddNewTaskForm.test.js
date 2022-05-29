import AddNewTaskForm from "../components/AddNewTaskForm";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

test("[1] AddNewTaskForm renders without errors", () => {
  render(<AddNewTaskForm />);
});
