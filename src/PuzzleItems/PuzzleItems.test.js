import React from "react";
import { render, cleanup } from 'test-utils';
import PuzzleItems from "./PuzzleItems";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<PuzzleItems />);
  expect(container).toMatchSnapshot();
});

it("should show the PuzzleItemsContainer element", () => {
  const { queryByTestId } = render(<PuzzleItems />);
  expect(queryByTestId("PuzzleItemsContainer")).toBeTruthy();
});

it("should show the DragItems element", () => {
  const { queryByTestId } = render(<PuzzleItems />);
  expect(queryByTestId("DragItemsContainer")).toBeTruthy();
});

it("should show the TargetItems element", () => {
  const { queryByTestId } = render(<PuzzleItems />);
  expect(queryByTestId("TargetItemsContainer")).toBeTruthy();
});

it("should show the PuzzleItemProperties element", () => {
  const { queryByTestId } = render(<PuzzleItems />);
  expect(queryByTestId("PuzzleItemPropertiesContainer")).toBeTruthy();
});