import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("[1] App renders without errors", () => {
  render(<App />);
});
