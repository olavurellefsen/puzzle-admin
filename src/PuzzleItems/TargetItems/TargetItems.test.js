import React from "react";
import { render, cleanup, waitForElement } from 'test-utils';
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

it("should show Loading... and then at least one TargetItemsImage element", async () => {
  const { getByText, queryByTestId } = render(<TargetItems />);
  expect(getByText("Loading...")).toBeTruthy();
  await waitForElement(() => queryByTestId("TargetItemsImage"));
  expect(queryByTestId("TargetItemsImage")).toBeTruthy();
});