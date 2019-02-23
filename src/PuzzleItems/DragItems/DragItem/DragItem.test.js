import React from "react";
import { render, cleanup } from 'test-utils';
import DragItem from "./DragItem";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<DragItem />);
  expect(container).toMatchSnapshot();
});

it("should show the DragItemContainer element", () => {
  const { queryByTestId } = render(<DragItem />);
  expect(queryByTestId("DragItemContainer")).toBeTruthy();
});