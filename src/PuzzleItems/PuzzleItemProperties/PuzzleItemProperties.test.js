import React from "react";
import { render, cleanup } from 'test-utils';
import PuzzleItemProperties from "./PuzzleItemProperties";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<PuzzleItemProperties />);
  expect(container).toMatchSnapshot();
});

it("should show the PuzzleItemPropertiesContainer element", () => {
  const { queryByTestId } = render(<PuzzleItemProperties />);
  expect(queryByTestId("PuzzleItemPropertiesContainer")).toBeTruthy();
});