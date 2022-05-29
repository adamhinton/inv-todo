import Header from "../components/Header";
import { render, screen } from "@testing-library/react";

test("[1] Header renders without errors", () => {
  render(<Header />);
});

test("[2] Header and Delete All button appear on screen", () => {
  render(<Header />);

  const h1 = screen.getByText("Inventora Tasks");
  const deleteAllButton = screen.getAllByText("Delete All");

  expect(h1).toBeVisible();
});
