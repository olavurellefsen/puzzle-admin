import React from "react";
import { render, cleanup } from 'test-utils';
import TargetItem from "./TargetItem";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<TargetItem />);
  expect(container).toMatchSnapshot();
});

it("should show the TargetItemContainer element", () => {
  const { queryByTestId } = render(<TargetItem />);
  expect(queryByTestId("TargetItemContainer")).toBeTruthy();
});