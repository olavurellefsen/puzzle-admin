import React from "react";
import { render, cleanup } from 'test-utils';
import DragLogics from "./DragLogics";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<DragLogics />);
  expect(container).toMatchSnapshot();
});

it("should show the DragLogicsContainer element", () => {
  const { queryByTestId } = render(<DragLogics />);
  expect(queryByTestId("DragLogicsContainer")).toBeTruthy();
});