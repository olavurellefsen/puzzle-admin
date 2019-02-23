import React from "react";
import { render, cleanup } from 'test-utils';
import DragItems from "./DragItems";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<DragItems />);
  expect(container).toMatchSnapshot();
});

it("should show the DragItemsContainer element", () => {
  const { queryByTestId } = render(<DragItems />);
  expect(queryByTestId("DragItemsContainer")).toBeTruthy();
});

it("should show the DragItemsImage element", () => {
  const { queryByTestId } = render(<DragItems />);
  expect(queryByTestId("DragItemsImage")).toBeTruthy();
});