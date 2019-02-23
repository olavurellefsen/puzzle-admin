import React from "react";
import { render, cleanup } from 'test-utils';
import Callback from "./Callback";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<Callback />);
  expect(container).toMatchSnapshot();
});

it("should show the Loading image", () => {
  const { queryByTestId } = render(<Callback />);
  expect(queryByTestId("LoadingImage")).toBeTruthy();
});