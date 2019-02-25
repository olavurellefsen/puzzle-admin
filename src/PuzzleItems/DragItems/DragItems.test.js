import React from "react";
import { render, cleanup, waitForElement } from 'test-utils';
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

it("should show Loading... and then at least one DragItemsImage element", async () => {
  const { getByText, queryByTestId } = render(<DragItems />);
  expect(getByText("Loading...")).toBeTruthy();
  await waitForElement(() => queryByTestId("DragItemsImage"));
  expect(queryByTestId("DragItemsImage")).toBeTruthy();
});