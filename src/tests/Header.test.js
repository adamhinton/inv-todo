import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

test("[1] Header renders without errors", () => {
  render(<Header />);
});

test("[2] Header and Delete All button appear on screen", () => {
  render(<Header />);

  const h1 = screen.getByText("Inventora Tasks");
  const deleteAllButton = screen.getByText("Delete All");

  expect(h1).toBeVisible();
  expect(deleteAllButton).toBeVisible();
});

test("[3] Matches snapshot from 5.29.22", () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
