import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

test("[1] App renders without errors", () => {
  render(<App />);
});

test("[2] Matches snapshot from 5.29.22", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
