import React from "react";
import { render, cleanup } from 'test-utils';
import DragLogic from "./DragLogic";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<DragLogic />);
  expect(container).toMatchSnapshot();
});

it("should show the DragLogicContainer element", () => {
  const { queryByTestId } = render(<DragLogic />);
  expect(queryByTestId("DragLogicContainer")).toBeTruthy();
});