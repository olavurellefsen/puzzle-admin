import React from "react";
import { render, cleanup } from 'test-utils';
import TargetItems from "./TargetItems";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<TargetItems />);
  expect(container).toMatchSnapshot();
});

it("should show the TargetItemsContainer element", () => {
  const { queryByTestId } = render(<TargetItems />);
  expect(queryByTestId("TargetItemsContainer")).toBeTruthy();
});

it("should show the TargetItemsImage element", () => {
  const { queryByTestId } = render(<TargetItems />);
  expect(queryByTestId("TargetItemsImage")).toBeTruthy();
});